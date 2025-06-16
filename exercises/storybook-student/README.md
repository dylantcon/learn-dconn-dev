# 📚 Interactive Storybook Exercise

Welcome to your storybook coding adventure! You'll learn how to add dropdown menus using JavaScript's `appendChild` and `removeChild` methods.

## 🎯 Your Mission

Add a dropdown menu to every page of the storybook using JavaScript!

## 🔧 What You'll Learn

- `document.querySelector()` - Find elements on the page
- `document.createElement()` - Create new HTML elements
- `appendChild()` - Add elements to the page
- `removeChild()` - Remove elements from the page
- `onclick` events - Make buttons interactive

## 📋 Step-by-Step Instructions

### Step 1: Start with `index.html`

1. **Add the dropdown container** (look for the TODO comment):
   ```html
   <div class="dropdown-container">
     <button class="dropdown-button" onclick="toggleDropdown()">⚙️ Story Tools</button>
   </div>
   ```

2. **Complete the `toggleDropdown()` function** by filling in the `???` parts:
   
   - Step 1: `const container = document.querySelector('.dropdown-container');`
   - Step 2: `const existingMenu = container.querySelector('.dropdown-menu');`
   - Step 3: `container.removeChild(existingMenu);`
   - Step 4: `const menu = document.createElement('div');` and `menu.className = 'dropdown-menu';`
   - Step 5: Create buttons with `document.createElement('button')`
   - Step 6: `container.appendChild(menu);`

### Step 2: Copy to Other Pages

Once `index.html` works:
1. Copy the dropdown container HTML to all other pages
2. Copy the `toggleDropdown()` function to all other pages

### Step 3: Customize Each Page

- **Page 2a & 2b**: Add a "Go Back" button using `window.history.back()`
- **Page 3a & 3b**: Add a "Play Again" button

## 🎨 Menu Items to Create

For each page, create these menu items:

**Home Page (index.html):**
- 🏠 Home
- 🔄 Restart Story  
- 📖 About Story

**Middle Pages (page2a.html, page2b.html):**
- 🏠 Home
- ⬅️ Go Back
- 📖 About Story

**Ending Pages (page3a.html, page3b.html):**
- 🏠 Home
- 🎆 Play Again
- 📖 About Story

## 💡 Helpful Hints

- The CSS is already written for you in `style.css`
- Use `window.location.href = 'page.html'` to navigate to pages
- Use `window.history.back()` to go back to the previous page
- Use `alert('message')` to show popup messages

## 🏆 Bonus Challenges

1. **Add Your Own Menu Item**: Create a new button with your own function!
2. **Change the Story**: Edit the text to make it your own adventure
3. **Add Sound Effects**: Use `new Audio('sound.mp3').play()` for clicks
4. **Animations**: Add CSS transitions to make the dropdown slide in

## 🔍 Testing Your Work

1. Open `index.html` in your browser
2. Click the "⚙️ Story Tools" button
3. Make sure the menu appears and disappears when clicked
4. Test all the menu buttons
5. Navigate through the story and test each page

## 📁 File Structure

```
storybook-student/
├── index.html      ← Start here!
├── page2a.html     ← Forest path
├── page2b.html     ← Mountain path
├── page3a.html     ← Ending A
├── page3b.html     ← Ending B
├── style.css       ← Styling (already done!)
└── README.md       ← You're reading this!
```

## 🎉 When You're Done

Show your teacher your working storybook! Be ready to explain:
- How `appendChild()` adds elements to the page
- How `removeChild()` removes elements from the page
- How the dropdown menu toggles open and closed

Good luck, and have fun coding your interactive storybook! 🚀