document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".timeline-pieces");
    const items = document.querySelectorAll(".timeline-item");
  
    // Function to update active class based on scroll position
    function updateActiveItem() {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
  
      // Loop through each item to calculate distance from the center of the container
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenter);
        const threshold = itemRect.width * 0.5; // Adjust this for sensitivity
  
        // If the item is near the center, set it to fully visible (opacity: 1)
        if (distance < threshold) {
          item.classList.add("active"); // This makes it visible
        } else {
          item.classList.remove("active"); // This fades it out
        }
      });
    }
  
    // Event listener to trigger `updateActiveItem` on scroll
    container.addEventListener("scroll", () => {
      requestAnimationFrame(updateActiveItem); // Throttling to improve performance
    });
  
    // Trigger the function on page load, resize, or when the user scrolls
    window.addEventListener("load", updateActiveItem);
    window.addEventListener("resize", updateActiveItem);
  
    // Initial call to set the first active item on page load
    updateActiveItem();
  
    // Scroll the container to the first item so that it starts centered
    const firstItem = items[0];
    container.scrollLeft =
      firstItem.offsetLeft -
      container.offsetWidth / 2 +
      firstItem.offsetWidth / 2;
  
    container.addEventListener("scroll", () => {
      console.log("Scroll event triggered");
      updateActiveItem(); // Make sure this is called to update the opacity
    });
  });
  