# name = input("Enter your name\n")
# print(f"Hello {name}")

# number = input("Enter a number\n")
# num = int(number)
# print(f"Number doubled: {num * 2}")

# a = 10
# b = 6
# print(f"Addition: {a + b}")
# print(f"Subtraction: {a - b}")
# print(f"Multiplication: {a * b}")
# print(f"Division: {a / b}")
# print(f"Floor Division: { a // b}")
# print(f"Modulus: {a % b}")
# print(f"Eponentiation: {a ** b}")

# Basic Calculator
first_number = float(input("What is the first number?\n"))
second_number = float(input("What is the second number?\n"))

addition = first_number + second_number
subtraction = first_number - second_number
multiplication = first_number * second_number
division = first_number / second_number if second_number != 0 else "Cannot divide by zero"

print("\n--- Calculator results ---")
print(f"Addition: {addition}")
print(f"Subtraction: {subtraction}")
print(f"Multiplication: {multiplication}")
print(f"Division: {division}")
