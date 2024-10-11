from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import time

# Initialize WebDriver for Chrome
chrome_driver_path = 'C:/Users/HP/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe'
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service)

# Open the website
driver.get('https://analytica-ten.vercel.app/')
time.sleep(2)

# Maximize the browser window
driver.maximize_window()
time.sleep(2)

# Interact with the web elements

# Check if the title is correct
assert "Analytica" in driver.title
print("Title is correct")
time.sleep(3)

###################################Login Test############################################
# Wait for the "Login/SignUp" button to be visible and clickable using the provided XPath
loginSignup_button = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/nav/ul/a[5]'))
)
loginSignup_button.click()
    
# Wait for 2 seconds to allow navigation
time.sleep(2)

# Locate the input field by its name/id/class
email_field = driver.find_element(By.NAME, 'email') 
email_field.send_keys('mahela@gmail.com')
time.sleep(2)

password_field = driver.find_element(By.NAME, 'password') 
password_field.send_keys('mahela')
time.sleep(2)

# Locate the login button and click
login_button = driver.find_element(By.XPATH, '//button[text()="Log In"]')
login_button.click()
time.sleep(5)