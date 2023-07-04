import React from "react";

function Panda(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.523926"
        y="0.557373"
        width="17.125"
        height="17.125"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_215_160217" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_215_160217"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjUgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA2LTA3VDE1OjQzOjM4KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNi0wN1QxNTo0NzozNCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNi0wN1QxNTo0NzozNCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M2YwY2ExNmEtYmViZS00YjA0LTlkM2ItMjQzZDlmZmJhYjIzIiB4bXBNTTpEb2N1bWVu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"
        />
      </defs>
    </svg>
  );
}

export default Panda;
