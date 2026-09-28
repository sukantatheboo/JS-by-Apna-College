fruits = {"apple": 100, "banana": 50, "mango": 120}
for key in fruits.keys():
    print(key)

for value in fruits.values():
    print(value)

fruits["banana"] = 60
print(fruits)

data = {"username": "admin", "password": "1234"}

if "email" in data:
    print("found")
else:
    print("not found")

numbers = [1, 2, 2, 3, 1, 4, 2]
frequency = {}

for num in numbers:
    if num in frequency:
        frequency[num] += 1
    else:
        frequency[num] = 1

print(frequency)

marks = {"Rahim": 80, "Karim": 65, "Sakib": 90}

for key, value in marks.items():
    if value > 70:
        print(key)

highest = 0       
for value in marks.values():
    if value > highest:
        highest = value

print(f'highest is {highest}')

person = {"name": "Sukanta", "age": 20, "city": "Dhaka"}

for key,value in person.items():
    print(f'{key} = {value}')

texts = "python is easy and python is fun"
output ={}
words = texts.split()
print(words)
for word in words:
    print(word)
    if word in output:
        output[word] +=1
    else:
        output[word] =1  

print(output)

