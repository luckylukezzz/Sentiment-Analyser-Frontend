# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.common.exceptions import NoSuchElementException, TimeoutException
# import time

# # Initialize WebDriver for Chrome
# chrome_driver_path = 'C:/Users/HP/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe'
# service = Service(chrome_driver_path)
# driver = webdriver.Chrome(service=service)

# # Open the website
# print("Opening the website...")
# driver.get('https://analytica-ten.vercel.app/')
# time.sleep(2)

# # Maximize the browser window
# print("Maximizing the window...")
# driver.maximize_window()
# time.sleep(2)

# # Check if the title is correct
# assert "Analytica" in driver.title
# print("Title is correct")
# time.sleep(3)

# # Function to run login test case
# def run_login_test(email, password, expected_message):
#     try:
#         print(f"Starting login test with email: {email} and password: {password}")

#         # Wait for the "Login" button to be visible and clickable
#         print("Waiting for 'Log In' button to be clickable...")
#         loginSignup_button = WebDriverWait(driver, 10).until(
#             EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/nav/ul/a[5]'))
#         )
#         loginSignup_button.click()
#         print("'Log In' button clicked successfully.")

#         # Wait for 2 seconds to allow navigation
#         time.sleep(2)

#         # Locate the input fields and fill them with email and password
#         print("Locating email field...")
#         email_field = driver.find_element(By.NAME, 'email') 
#         email_field.clear()  # Clear any pre-filled text
#         print(f"Filling in the email: {email}")
#         email_field.send_keys(email)
#         time.sleep(2)

#         print("Locating password field...")
#         password_field = driver.find_element(By.NAME, 'password') 
#         password_field.clear()  # Clear any pre-filled text
#         print("Filling in the password.")
#         password_field.send_keys(password)
#         time.sleep(2)

#         # Locate the login button and click it
#         print("Locating the 'Log In' button and clicking it...")
#         login_button = driver.find_element(By.XPATH, '//button[contains(text(), "Log In")]')
#         login_button.click()
#         print("'Log In' button clicked.")

#         # Wait for 5 seconds for response
#         time.sleep(5)

#         # Check if login is successful by looking for a dashboard element
#         try:
#             print("Checking for the presence of the dashboard element to confirm login success...")
#             ashboard_element = WebDriverWait(driver, 5).until(
#                 EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[3]/div[2]/div/div[1]/div/input'))  # Example XPATH of post-login element
#             )
#             print(f"Test passed for email: {email} and password: {password} - Dashboard found.")
#         except TimeoutException:
#             # Look for an error message and compare it to the expected message
#             print("Login failed, checking for error message...")
#             login_error_message = driver.find_element(By.CLASS_NAME, 'error-message').text
#             print(f"Test failed for email: {email} and password: {password}. Error message: {login_error_message}")
#             assert expected_message in login_error_message

#     except (NoSuchElementException, TimeoutException) as e:
#         print(f"Test failed due to an error: {e}")

# # Test cases
# test_cases = [
#     {"email": "invaliduser@gmail.com", "password": "test", "expected_message": "Invalid email or password"},
#     {"email": "validuser@gmail.com", "password": "validpassword", "expected_message": "Dashboard loaded"}  # Placeholder, adjust logic based on dashboard validation
# ]

# # Run each test case
# for case in test_cases:
#     run_login_test(case["email"], case["password"], case["expected_message"])
#     # Navigate back to the login page if necessary, depending on your app's behavior after login attempt
#     print("Navigating back to the home page...")
#     driver.get('https://analytica-ten.vercel.app/')
#     time.sleep(3)

# # Close the browser when all tests are done
# print("Closing the browser...")
# driver.quit()
# print("Test completed.")

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
import time

# Initialize WebDriver for Chrome
chrome_driver_path = 'C:/Users/HP/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe'
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service)

# Open the website
print("Opening the website...")
driver.get('https://analytica-ten.vercel.app/')
time.sleep(2)

# Maximize the browser window
print("Maximizing the window...")
driver.maximize_window()
time.sleep(2)

# Check if the title is correct
assert "Analytica" in driver.title
print("Title is correct")
time.sleep(3)

# Function to run login test case
def run_login_test(email, password, expected_message):
    try:
        print(f"Starting login test with email: {email} and password: {password}")

        # Wait for the "Log In" button to be visible and clickable
        print("Waiting for 'Log In' button to be clickable...")
        loginSignup_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/nav/ul/a[5]'))
        )
        loginSignup_button.click()
        print("'Log In' button clicked successfully.")

        # Wait for 2 seconds to allow navigation
        time.sleep(2)

        # Locate the input fields and fill them with email and password
        print("Locating email field...")
        email_field = driver.find_element(By.NAME, 'email') 
        email_field.clear()  # Clear any pre-filled text
        print(f"Filling in the email: {email}")
        email_field.send_keys(email)
        time.sleep(2)

        print("Locating password field...")
        password_field = driver.find_element(By.NAME, 'password') 
        password_field.clear()  # Clear any pre-filled text
        print("Filling in the password.")
        password_field.send_keys(password)
        time.sleep(2)

        # Locate the login button and click it
        print("Locating the 'Log In' button and clicking it...")
        login_button = driver.find_element(By.XPATH, '//button[contains(text(), "Log In")]')
        login_button.click()
        print("'Log In' button clicked.")

        # Wait for 5 seconds for response
        time.sleep(5)

        # Check if login is successful by looking for a dashboard element
        try:
            print("Checking for the presence of the dashboard element to confirm login success...")
            dashboard_element = WebDriverWait(driver, 5).until(
                EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[3]/div[2]/div/div[1]/div/input'))  # Example XPATH of post-login element
            )
            print(f"Test passed for email: {email} and password: {password} - Dashboard found.")
        except TimeoutException:
            # If login fails, check for an error message and validate it
            print("Login failed, checking for error message...")
            login_error_message = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/div/div/div[2]/div/div[2]/form/div[3]/p').text
            print(f"Error message found: {login_error_message}")
            # Check if the actual error message contains the expected error message
            if expected_message in login_error_message:
                print(f"Test passed: Expected error message '{expected_message}' was displayed.")
            else:
                print(f"Test failed: Expected error message '{expected_message}' was not displayed. Actual message: '{login_error_message}'")

    except (NoSuchElementException, TimeoutException) as e:
        print(f"Test failed due to an error: {e}")

# Test cases
test_cases = [
    {"email": "invaliduser@gmail.com", "password": "test", "expected_message": "Invalid email or password"},
    {"email": "validuser@gmail.com", "password": "validpassword", "expected_message": "Dashboard loaded"}  # Placeholder, adjust logic based on dashboard validation
]

# Run each test case
for case in test_cases:
    run_login_test(case["email"], case["password"], case["expected_message"])
    # Navigate back to the login page if necessary, depending on your app's behavior after login attempt
    print("Navigating back to the home page...")
    driver.get('https://analytica-ten.vercel.app/')
    time.sleep(3)

# Close the browser when all tests are done
print("Closing the browser...")
driver.quit()
print("Test completed.")
