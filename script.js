let selectedRating;
const RatingCard = document.getElementById("rating-card");
const ThankYouCard = document.getElementById("thank-you-card");
const result = document.getElementById("result-text");
const errorMessage = document.getElementById("error");

ThankYouCard.style.display = "none";

const selectRatings = (id) => {
  const selectedRatingButton = document.getElementById(id);
  if (selectedRatingButton.style.color == "white") {
    selectedRatingButton.style.background = "hsl(213, 19%, 18%)";
    selectedRatingButton.style.color = "rgba(255, 255, 255, 0.4)";
    selectedRating = null;
  } else {
    selectedRatingButton.style.background = "hsl(25, 97%, 53%)";
    selectedRatingButton.style.color = "white";
    selectedRating = id;
  }
};

const submit = () => {
  if (selectedRating == null) {
    errorMessage.style.opacity = "1";
    const fadeOut = setTimeout(() => {
      errorMessage.style.opacity = "0";
    }, 1500);
    return;
  }
  result.innerHTML = `You selected ${selectedRating} out of 5`;
  const fadeOut = setTimeout(() => {
    RatingCard.style.display = "none";
  }, 1000);
  RatingCard.style.transition = "all 0.8s";
  RatingCard.style.opacity = "0";
  ThankYouCard.style.opacity = "0";
  const fadeIn = setTimeout(() => {
    ThankYouCard.style.display = "flex";
  }, 1000);
  const fadeInText = setTimeout(() => {
    ThankYouCard.style.opacity = "1";
  }, 1500);
  ThankYouCard.style.transition = "all 0.8s";
};
