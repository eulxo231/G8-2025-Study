import pygame
import sys
import math
from Object import Object

# 기본 설정
WIDTH, HEIGHT = 640, 480
FPS = 60
JUMP_RATIO = 1.8
GRAVITY = 0.5 * JUMP_RATIO
JUMP_POWER = -10 * JUMP_RATIO
GROUND_Y = HEIGHT - 50
BASE_OBJECT_SPEED = 5
MAX_OBJECT_SPEED = 15 #maximum speed that the projectile approaches

# 색상
WHITE = (255, 255, 255)
BLUE = (50, 150, 255)

# 초기화
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
pygame.display.set_caption("Jump Example")

object_size = 20
frame_count = 0
OBJECT_SPEED_STANDARD = BASE_OBJECT_SPEED

object_list = [
    Object(WIDTH, GROUND_Y - object_size, object_size, object_size, (0, 0, 0), OBJECT_SPEED_STANDARD)
]

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

    # Logarithmic growth implementation
    frame_count += 1 #frame counter 
    OBJECT_SPEED_STANDARD = BASE_OBJECT_SPEED + math.log1p(frame_count * 0.1) #log1p - This function returns log(1 + x), making a gradual and smooth growth for the speed to rise in.
    OBJECT_SPEED_STANDARD = min(OBJECT_SPEED_STANDARD, MAX_OBJECT_SPEED) #OBJECT_SPEED_STANDARD = capping the speed so it never gets too fast

    print(f"Speed: {OBJECT_SPEED_STANDARD:.2f}")

    for object in object_list:
        object.move()

    # Drawing
    pygame.draw.rect(screen, BLUE, player)
    pygame.draw.line(screen, (0, 0, 0), (0, GROUND_Y), (WIDTH, GROUND_Y), 2)

    for object in object_list:
        object.draw(screen)
        if object.is_out_of_screen():
            object_list.remove(object)
            object_list.append(Object(WIDTH, GROUND_Y - object_size, object_size, object_size, (0, 0, 0), OBJECT_SPEED_STANDARD))

    pygame.display.flip()
