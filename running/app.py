import pygame
import sys

# 기본 설정
WIDTH, HEIGHT = 640, 480
FPS = 60
GRAVITY = 0.5
JUMP_POWER = -10
GROUND_Y = HEIGHT - 50

# 색상
WHITE = (255, 255, 255)
BLUE = (50, 150, 255)

# 초기화
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
pygame.display.set_caption("Jump Example")

player = pygame.Rect(100, GROUND_Y - 50, 50, 50)
velocity_y = 0
grounded = True

# 게임 루프
while True:
    clock.tick(FPS)
    screen.fill(WHITE)

    # 이벤트 처리
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    keys = pygame.key.get_pressed()
    if keys[pygame.K_SPACE] and grounded:
        velocity_y = JUMP_POWER
        grounded = False

    velocity_y += GRAVITY
    player.y += velocity_y

    if player.y >= GROUND_Y - player.height:
        player.y = GROUND_Y - player.height
        velocity_y = 0
        grounded = True

    pygame.draw.rect(screen, BLUE, player)
    pygame.draw.line(screen, (0, 0, 0), (0, GROUND_Y), (WIDTH, GROUND_Y), 2)

    pygame.display.flip()
