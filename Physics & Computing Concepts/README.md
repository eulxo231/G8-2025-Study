# Physics & Computing Concepts

This folder contains study materials and simulations that cover fundamental concepts in physics and computer science. Topics include number systems, kinematic motion, and interactive simulations implemented in Python using Pygame.

---

## 📘 Topics Covered

### 1. Number Systems
- **Octal (Base-8)**: Common in low-level computing and digital systems.
- **Hexadecimal (Base-16)**: Frequently used in memory addressing and color codes.

### 2. Physics of Motion
- **Accelerated Motion**: Study of velocity change over time under constant acceleration.
- **Projectile Motion**: Motion of an object thrown into space, influenced only by gravity and initial velocity.

### 3. Simulation
- **Gravity Simulation**: A Pygame-based simulation demonstrating the motion of an object affected by gravity, with basic collision and energy loss.

---

## 💻 Gravity Simulation Code

```python
import pygame
import sys

# Initialize Pygame
pygame.init()

# Set screen size
screen_width = 640
screen_height = 640
screen = pygame.display.set_mode((screen_width, screen_height))
FPS = 60
rad = 20
x = rad
y = screen_height - rad
gravity = 0.1
vx = 2
vy = -10
pvy = vy

# Set window title
pygame.display.set_caption("Pygame")

# Set FPS settings
clock = pygame.time.Clock()

# Main loop
running = True
while running:
    clock.tick(FPS)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    vy += gravity
    y += vy
    x += vx

    if y + rad >= screen_height:
        y = screen_height - rad
        vy = pvy
        pvy *= 0.95

    if x + rad >= screen_width or x - rad < 0:
        vx *= -1

    screen.fill((255, 255, 255))  # White background
    pygame.draw.circle(screen, (0, 0, 0), (x, y), rad)
    pygame.display.flip()

pygame.quit()
sys.exit()
