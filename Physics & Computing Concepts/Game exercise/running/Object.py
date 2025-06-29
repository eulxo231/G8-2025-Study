import pygame
import random

class Object:
    def __init__(self, x, y, w ,h, color, speed):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.color = color
        self.speed = random.randint(speed * 0.9 // 1, speed * 1.1 // 1)

    def get_object_rect(self):
        return pygame.Rect(self.x, self.y, self.w, self.h)
    
    def draw(self, screen):
        pygame.draw.rect(screen,self.color, self.get_object_rect())

    def move(self):
        self.x -= self.speed

    def is_out_of_screen(self):
        if self.x + self.w <= 0:
            return True
        else:
            return False
        

