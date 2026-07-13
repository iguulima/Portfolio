"use client";

import { useEffect, useRef } from "react";

const fadeDelay = 850;

export default function DynamicScrollbar() {
  const railRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const thumb = thumbRef.current;
    if (!rail || !thumb) return;

    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    let dragging = false;
    let dragStartY = 0;
    let dragStartScroll = 0;

    const measurements = () => {
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const railHeight = rail.clientHeight;
      const scrollableHeight = Math.max(pageHeight - viewportHeight, 0);
      const thumbHeight = Math.max(44, railHeight * (viewportHeight / pageHeight));
      const thumbTravel = Math.max(railHeight - thumbHeight, 0);

      return { scrollableHeight, thumbHeight, thumbTravel };
    };

    const updateThumb = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { scrollableHeight, thumbHeight, thumbTravel } = measurements();
        const progress = scrollableHeight ? window.scrollY / scrollableHeight : 0;

        rail.classList.toggle("isScrollable", scrollableHeight > 0);
        thumb.style.height = `${thumbHeight}px`;
        thumb.style.transform = `translateY(${Math.min(progress, 1) * thumbTravel}px)`;
      });
    };

    const hideLater = () => {
      clearTimeout(fadeTimer);
      fadeTimer = setTimeout(() => {
        if (!dragging) rail.classList.remove("isVisible");
      }, fadeDelay);
    };

    const reveal = () => {
      rail.classList.add("isVisible");
      updateThumb();
      hideLater();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) {
        if (event.clientX >= window.innerWidth - 28) reveal();
        return;
      }
      const { scrollableHeight, thumbTravel } = measurements();
      if (!thumbTravel) return;
      event.preventDefault();
      const scrollDelta = (event.clientY - dragStartY) * (scrollableHeight / thumbTravel);
      document.documentElement.scrollTop = Math.min(
        Math.max(dragStartScroll + scrollDelta, 0),
        scrollableHeight,
      );
    };

    const stopDragging = () => {
      if (!dragging) return;
      dragging = false;
      rail.classList.remove("isDragging");
      document.documentElement.classList.remove("scrollbarDragging");
      hideLater();
    };

    const startDragging = (event: PointerEvent) => {
      event.preventDefault();
      dragging = true;
      dragStartY = event.clientY;
      dragStartScroll = window.scrollY;
      rail.classList.add("isVisible", "isDragging");
      document.documentElement.classList.add("scrollbarDragging");
      clearTimeout(fadeTimer);
      thumb.setPointerCapture(event.pointerId);
    };

    const jumpToPosition = (event: PointerEvent) => {
      if (event.target !== rail) return;
      event.preventDefault();
      const { scrollableHeight, thumbHeight, thumbTravel } = measurements();
      const railTop = rail.getBoundingClientRect().top;
      const centeredPosition = event.clientY - railTop - thumbHeight / 2;
      const progress = Math.min(Math.max(centeredPosition / thumbTravel, 0), 1);

      rail.classList.add("isVisible");
      window.scrollTo({ top: progress * scrollableHeight, behavior: "smooth" });
      hideLater();
    };

    thumb.addEventListener("pointerdown", startDragging);
    rail.addEventListener("pointerdown", jumpToPosition);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", updateThumb);

    const resizeObserver = new ResizeObserver(updateThumb);
    resizeObserver.observe(document.body);
    updateThumb();

    return () => {
      clearTimeout(fadeTimer);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("scrollbarDragging");
      resizeObserver.disconnect();
      thumb.removeEventListener("pointerdown", startDragging);
      rail.removeEventListener("pointerdown", jumpToPosition);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  return (
    <div className="dynamicScrollbar" ref={railRef} aria-hidden="true">
      <div className="dynamicScrollbarThumb" ref={thumbRef} />
    </div>
  );
}
