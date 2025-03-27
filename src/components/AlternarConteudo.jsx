import {useState} from 'react'

function Experience() {
  const [experience, setExperience] = useState(1)

  return (
    <div className="p-4">
      <div className="flex gap-2">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setExperience(1)}
        >
          Mostrar Experiência 1
        </button>
        <button
          className="p-2 bg-green-500 text-white rounded"
          onClick={() => setExperience(2)}
        >
          Mostrar Experiência 2
        </button>
      </div>

      <div className="mt-4 text-lg">
        {experience === 1 ? (
          <p className="text-blue-600">🟦 Esta é a Experiência 1</p>
        ) : (
          <p className="text-green-600">🟩 Esta é a Experiência 2</p>
        )}
      </div>
    </div>
  );
}

export default Experience