const animal_form = $('#animal-form');
const zookeeper_form = $('#zookeeper-form');

const handleFormSubmission = function (event) {
      event.preventDefault()

      let animal = $(animal_form).find('[name="animal-name"]').val();
      let species = animal_form.querySelector('[name="species"]').value;
      let diet_radio_input = animal_form.querySelectorAll('[name="diet"]');
      let diet;

      diet = diet_radio_input.find(input => input.checked)?.value || '';
      if(diet === '') {
            alert('please select a diet')
            return;
      }

      console.log(animal, species, diet)
}