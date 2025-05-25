import pygame

class Player:
    def __init__(self,info = (0,0,0)):
        self.x,self.y,self.r = info

    def draw(self,screen):
        pygame.draw.circle(screen,(0,0,0), (self.x,self.y),self.r)


