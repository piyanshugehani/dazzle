// Wave class (improved version of n)
function Wave(options) {
  this.init(options || {});
}

Wave.prototype = {
  init: function(options) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.015;
    this.amplitude = options.amplitude || 80;
    this.currentValue = this.offset;
  },
  update: function() {
    this.phase += this.frequency;
    this.currentValue = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.currentValue;
  },
  value: function() {
    return this.currentValue;
  }
};

function Node() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

function Line(options) {
  this.init(options || {});
}

Line.prototype = {
  init: function(options) {
    this.spring = options.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      let node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  },
  update: function() {
    let springForce = this.spring;
    let firstNode = this.nodes[0];
    firstNode.vx += (pos.x - firstNode.x) * springForce;
    firstNode.vy += (pos.y - firstNode.y) * springForce;

    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i];
      if (i > 0) {
        let prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * springForce;
        node.vy += (prev.y - node.y) * springForce;
        node.vx += prev.vx * E.dampening;
        node.vy += prev.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      springForce *= E.tension;
    }
  },
  draw: function() {
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

    // Draw a smooth curve through the nodes using quadratic curves
    for (let i = 1; i < this.nodes.length - 2; i++) {
      let curr = this.nodes[i];
      let next = this.nodes[i + 1];
      let midX = 0.5 * (curr.x + next.x);
      let midY = 0.5 * (curr.y + next.y);
      ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
    }
    // For the last segment
    let secondLast = this.nodes[this.nodes.length - 2];
    let last = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);

    ctx.strokeStyle = "#A8323F";
    ctx.stroke();
    ctx.closePath();
  }
};

function onMouseMove(e) {
  // Set up lines if not already created
  function setupLines() {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
  }
  function updatePos(e) {
    if (e.touches) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }
  function handleTouch(e) {
    if (e.touches && e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  // Remove initial listeners to avoid duplicate bindings
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("touchstart", onMouseMove);
  document.addEventListener("mousemove", updatePos);
  document.addEventListener("touchmove", updatePos);
  document.addEventListener("touchstart", handleTouch);
  updatePos(e);
  setupLines();
  render();
}

function render() {
  if (!ctx.running) return;
  // Clear the canvas using the full (scaled) dimensions
  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.globalCompositeOperation = "lighter";

  // Global drawing settings for smooth rendering
  ctx.strokeStyle = "#A8323F";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (let i = 0; i < E.trails; i++) {
    let line = lines[i];
    line.update();
    line.draw();
  }
  ctx.frame++;
  window.requestAnimationFrame(render);
}

let canvasWidth, canvasHeight;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  // Define desired visible dimensions
  canvasWidth = window.innerWidth - 20;
  // Increase the canvas height by 20% for extra vertical space
  canvasHeight = window.innerHeight * 1.2;
  const canvas = document.getElementById("canvas");

  // Set the CSS display size
  canvas.style.width = canvasWidth + "px";
  canvas.style.height = window.innerHeight + "px"; // Keep the visible height as window height

  // Set the actual canvas dimensions, scaled by the device pixel ratio
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;

  // Scale the context to ensure crisp rendering on high-DPI displays
  ctx.resetTransform && ctx.resetTransform(); // reset any previous transforms if supported
  ctx.scale(dpr, dpr);
}

var ctx,
    pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    lines = [];
var E = {
  debug: true,
  friction: 0.5,
  trails: 50,
  size: 50,
  dampening: 0.0005,
  tension: 0.99,
};

var wave; // Wave instance

// Exported function to initialize the canvas rendering
export const renderCanvas = function() {
  const canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.running = true;
  ctx.frame = 1;
  
  // Initialize the wave with the improved parameters
  wave = new Wave({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 60,
    frequency: 0.015,
    offset: 2,
  });
  
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("touchstart", onMouseMove);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = false;
  });
  resizeCanvas();
};
