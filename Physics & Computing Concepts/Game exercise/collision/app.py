import pygame
import sys

# Initialize Pygame
pygame.init()

# Set screen size
screen_width = 500
screen_height = 800
screen = pygame.display.set_mode((screen_width, screen_height))
FPS = 60
# Set window title
pygame.display.set_caption("Pygame")
r1 = 30
r2 = 15
x1 = screen_width - r1
y1 = screen_height - r1
x2 = 0 + r2
y2 = 0 +r2
vx_1 = 5
vx_2 = 5
vy_1 = 3
vy_2 = 3

# Set FPS settings
clock = pygame.time.Clock()

# Main loop
running = True
while running:
    clock.tick(FPS)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False


    screen.fill((255, 255, 255))  # White background
    x1 += vx_1
    y1 += vy_1
    x2 += vx_2
    y2 += vy_2
    if x1 < r1:
        vx_1*= -1
        x1 = r1
    if x1 > screen_width - r1:
        vx_1*= -1
        x1 = screen_width - r1
    if x2 < r2:
        vx_2*= -1
        x2 = r2
    if x2 > screen_width - r2:
        vx_2*= -1
        x2 = screen_width - r2
    if y1 < r1:
        vy_1*= -1
        y1 = r1
    if y1 > screen_height - r1:
        vy_1*= -1
        y1 = screen_height - r1
    if y2 < r2:
        vy_2*= -1
        y2 = r2
    if y2 > screen_height - r2:
        vy_2*= -1
        y2 = screen_height - r2
    d = ((x2-x1)**2 + (y2-y1)**2)**0.5
    if d <= r1+r2:
        running = False
    pygame.draw.circle(screen,(0,255,255), (x1,y1),r1)
    pygame.draw.circle(screen, (255,0,255), (x2,y2), r2)
    
    pygame.display.flip()

pygame.quit()
sys.exit()