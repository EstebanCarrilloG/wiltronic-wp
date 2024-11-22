/**
 * Adds an event listener to each element in the target jQuery object
 * to toggle the display of the next sibling element when the element is clicked.
 *
 * @param {jQuery} target - The jQuery object containing the elements to add the
 * event listener to.
 */
export function categoryAnimations(target) {
  target.click(function () {
    $(this.nextElementSibling).slideToggle();
  });
}