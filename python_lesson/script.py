print('Hellow World')

a = 5
if a < 10:
    print('watanabe')
elif a >= 10:
    print('tomohiko')
else:
    print('enjinia')

if a <= 10:    
    print('aiue')
elif 10 < a <= 25:
    print('kakiku')
elif 25 < a:
    print('sasisi')

print(11 // 2) 
print(15 % 6)

x = 5
def hellow(x):
    return x ** 2
print(hellow(x))

def moji(name):
    print(name)
moji('gogogoo')   

def hissu(b, c, d, e=5, f=8):
    return b + c + d + e + f
hikisuu = hissu(3, 5, 6, 1, 3)
print(hikisuu)

#問４
def seisuu(ai):
    return ai / 2
def kakuzo(ai):
    return ai * 4
ue = seisuu(4)
print(kakuzo(ue))