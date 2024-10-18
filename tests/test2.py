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
driver.get('http://localhost:3000/')
time.sleep(2)

# Maximize the browser window
driver.maximize_window()
time.sleep(2)

# Check if the title is correct
assert "Analytica" in driver.title
print("Title is correct")
time.sleep(3)

# Function to run login test case
def run_login_test(email, password, expected_message):
    try:
        # Wait for the "Login/SignUp" button to be visible and clickable
        loginSignup_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/nav/ul/a[5]'))
        )
        loginSignup_button.click()

        # Wait for 2 seconds to allow navigation
        time.sleep(2)

        # Locate the input fields and fill them with email and password
        email_field = driver.find_element(By.NAME, 'email') 
        email_field.clear()  # Clear any pre-filled text
        email_field.send_keys(email)
        time.sleep(2)

        password_field = driver.find_element(By.NAME, 'password') 
        password_field.clear()  # Clear any pre-filled text
        password_field.send_keys(password)
        time.sleep(2)

        # Locate the login button and click it
        login_button = driver.find_element(By.XPATH, '//button[text()="Log In"]')
        login_button.click()

        # Wait for 5 seconds for response
        time.sleep(5)

        # Check if login is successful by looking for an element that only appears after login
        # Adjust this as per your application's post-login behavior
        try:
            dashboard_element = WebDriverWait(driver, 5).until(
                EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[3]/div[2]/div/div[1]/div/input'))  # Example XPATH of post-login element
            ) 
            print(f"Test passed for email: {email} and password: {password}")
        except TimeoutException:
            print(f"Test failed for email: {email} and password: {password}. Expected: {expected_message}")

    except (NoSuchElementException, TimeoutException) as e:
        print(f"Test failed due to error: {e}")

# Test cases
test_cases = [
    {"email": "testuser@gmail.com", "password": "test", "expected_message": "Dashboard loaded"}
]

# Run each test case
for case in test_cases:
    run_login_test(case["email"], case["password"], case["expected_message"])
    # Navigate back to the login page if necessary, depending on your app's behavior after login attempt
    driver.get('https://analytica-ten.vercel.app/')
    time.sleep(3)

# Close the browser when all tests are done
driver.quit()

