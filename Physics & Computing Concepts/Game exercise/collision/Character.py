import pygame

class Character:
    def __init__(self, info = (0,0,0), color = (0,0,0), speed = 0):
        self.x, self.y, self.r = info
        self.color = color
        self.speed = speed

    def show(self,screen):
        pygame.draw.circle(screen,self.color, (self.x,self.y), self.r)
    
    def move(self, left = False, right = False, up = False, down = False):
        if left:
            self.x -= self.speed
        if right:
            self.x += self.speed
        if up:
            self.y -= self.speed
        if down:
            self.y += self.speed