Order.UK - Food Delivery Web Application
Live Demo: 

Overview
Order.UK is a responsive food delivery web application built with HTML, CSS (Tailwind CSS), and JavaScript. The application features a McDonald's-themed interface with a complete ordering system, including product listings, shopping cart functionality, and restaurant information.

Features
Core Functionality
Product Catalog: Displays food items categorized as Burgers, Fries, and Cold Drinks

Shopping Cart:

Add/remove items

Adjust quantities

Calculate total price

Toast notifications

Responsive Design: Works on mobile, tablet, and desktop screens

Interactive UI:

Mobile-friendly navigation

Product cards with hover effects

Animated cart modal

Additional Sections
Restaurant information (hours, contact details)

Customer reviews carousel

Similar restaurants display

FAQ and help section

Newsletter subscription

Footer with legal links

Technical Details
Technologies Used
Frontend:

HTML5

CSS3 (with Tailwind CSS framework)

JavaScript (ES6)

Dependencies:

Tailwind CSS (via CDN)

Google Fonts (Poppins)

Build: No build system required (runs directly in browser)

Data Structure
The application uses a JSON file (data.json) to store product information with the following structure:

json
{
  "id": Number,
  "name": String,
  "items": Array<String>,
  "price": Number,
  "image": String,
  "type": String
}
Key JavaScript Functions
renderProducts(): Dynamically renders product cards based on category

addToCart(): Manages cart state and updates UI

updateCartUI(): Reflects cart changes in the interface

showToast(): Displays temporary notifications

changeQty(): Handles quantity adjustments in cart

Setup Instructions
Quick Start
Clone or download the repository

Open index.html in a web browser

File Structure
text
order-uk/
├── index.html        # Main HTML file
├── script.js         # JavaScript functionality
├── data.json         # Product data
├── images/           # All image assets
├── README.md         # This documentation
Customization
Adding New Products
Edit data.json and add new objects following the existing structure

Ensure corresponding images are added to the images/ folder

The application will automatically display new products in their respective categories

Styling Changes
Modify Tailwind classes directly in HTML

Add custom CSS in the <style> section of index.html

Browser Support
The application should work in all modern browsers including:

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Known Limitations
Cart data is not persisted between page refreshes

No backend integration (purely frontend demonstration)

Image paths are hardcoded and must match exactly

Future Enhancements
Add user authentication

Implement persistent cart using localStorage

Add search functionality

Integrate with a payment gateway

Add more restaurant categories