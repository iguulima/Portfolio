import type { Project } from "@/data/portfolio";

export default function ProjectArtwork({ variant, large = false }: Pick<Project, "variant"> & { large?: boolean }) {
  if (variant === "polaroid") {
    return <div className={`polaroids ${large ? "artworkLarge" : ""}`} aria-hidden="true"><span><i /></span><span><i /></span></div>;
  }

  if (variant === "chart") {
    return (
      <div className={`mock chartMock ${large ? "artworkLarge" : ""}`} aria-hidden="true">
        <div className="browserBar"><i/><i/><i/></div>
        <div className="mockScreen"><span className="skeleton short"/><div className="bars">{[40,75,55,95,35,65].map((height,index) => <i key={height} style={{height:`${height}%`,opacity:index === 2 || index === 4 ? .25 : 1}}/>)}</div><span className="skeleton long"/></div>
      </div>
    );
  }

  return (
    <div className={`mock timerMock ${large ? "artworkLarge" : ""}`} aria-hidden="true">
      <div className="browserBar"><i/><i/><i/></div>
      <div className="mockScreen timerScreen"><div className="timer">25:00</div><span className="skeleton long"/><div className="mockButtons"><i/><i/></div></div>
    </div>
  );
}
