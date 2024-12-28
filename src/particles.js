function createParticleAnimation(options = {}) {
  // Default options
  const defaultOptions = {
    particleCount: 50,
    particleColor: "rgba(255, 255, 255, 0.3)",
    minSize: 1,
    maxSize: 6,
    minSpeed: 0.1,
    maxSpeed: 0.6,
  };

  // Merge provided options with defaults
  const mergedOptions = { ...defaultOptions, ...options };

  class ParticleAnimation {
    constructor(opts) {
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.particles = [];

      this.options = opts;

      this.setupCanvas();
      this.createParticles();
      this.animate();
    }

    setupCanvas() {
      this.canvas.style.position = "fixed";
      this.canvas.style.top = "0";
      this.canvas.style.left = "0";
      //this.canvas.style.zIndex = "20";
      this.canvas.style.pointerEvents = "none";

      // Set canvas to be transparent
      this.canvas.style.backgroundColor = "transparent";

      this.resizeCanvas();
      document.body.prepend(this.canvas);

      window.addEventListener("resize", () => this.resizeCanvas());
      window.addEventListener("scroll", () => this.handleScroll());
    }

    resizeCanvas() {
      // Make canvas larger than viewport to cover entire scrollable area
      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.clientHeight,
        document.body.clientHeight,
      );

      this.canvas.width = window.innerWidth;
      this.canvas.height = pageHeight;
    }

    handleScroll() {
      // Adjust canvas position to match scroll
      this.canvas.style.top = `-${window.scrollY}px`;
    }

    createParticle() {
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size:
          Math.random() *
          (this.options.maxSize - this.options.minSize) +
          this.options.minSize,
        speed:
          Math.random() *
          (this.options.maxSpeed - this.options.minSpeed) +
          this.options.minSpeed,
        opacity: Math.random() * 0.1 + 0.1,
      };
    }

    createParticles() {
      // Create more particles to cover the entire page height
      this.particles = Array.from(
        { length: Math.ceil(this.options.particleCount * 2) },
        () => this.createParticle(),
      );
    }

    animate() {
      // Clear canvas with a transparent clear
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw and move particles
      this.particles.forEach((particle) => {
        // Draw particle
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        this.ctx.arc(
          particle.x,
          particle.y,
          particle.size / 2,
          0,
          Math.PI * 2,
        );
        this.ctx.fill();

        // Move particle
        particle.y -= particle.speed;

        // Reset particle if it goes off screen
        if (particle.y < -10) {
          particle.y = this.canvas.height + 10;
          particle.x = Math.random() * this.canvas.width;
          particle.size =
            Math.random() *
            (this.options.maxSize - this.options.minSize) +
            this.options.minSize;
          particle.speed =
            Math.random() *
            (this.options.maxSpeed -
              this.options.minSpeed) +
            this.options.minSpeed;
          particle.opacity = Math.random() * 0.4 + 0.1;
        }
      });

      // Continue animation
      requestAnimationFrame(() => this.animate());
    }
  }

  // Return a new instance or the class itself
  return new ParticleAnimation(mergedOptions);
}
// With custom options
const particleAnimation3 = createParticleAnimation({
  particleCount: 100,
  minSpeed: 0.05,
  maxSpeed: 0.4,
});
