function tick(){
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const el = document.getElementById("clock");
  if (el) el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
tick();
setInterval(tick, 1000);
