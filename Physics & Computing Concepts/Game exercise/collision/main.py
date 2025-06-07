import pygame
import sys
from Character import Character

# Initialize Pygame
pygame.init()

# Set screen size
screen_width = 500
screen_height = 800
screen = pygame.display.set_mode((screen_width, screen_height))
FPS = 60
player = Character((screen_width/2,screen_height-30,20),(255,0,0),5)
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

    keys = pygame.key.get_pressed()
    if keys[pygame.K_RIGHT]:
        player.move(right = True) 
    if keys[pygame.K_LEFT]:
        player.move(left = True)
    if keys[pygame.K_UP]:
        player.move(up = True)
    if keys[pygame.K_DOWN]:
        player.move(down = True)

    screen.fill((255, 255, 255))  # White background
    player.show(screen)
    pygame.display.flip()

pygame.quit()
sys.exit()