import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
    // here we ask the logical questions to make decisions on how to build the html
    // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
    let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
    if (variables.includeCover == false) cover = "<div class='cover'></div>";
    let aName = "Name";
    if (variables.name !== null) aName = variables.name;
    let lName = "Last Name";
    if (variables.lastname !== null) lName = variables.lastname;
    let work = "Role";
    if (variables.role !== null) work = variables.role;
    let place = "City";
    if (variables.city !== null) place = variables.city;
    let countryname = "Country";
    if (variables.country !== null) countryname = variables.country;
    let position = "S.M. Position";
    if (variables.socialMediaPosition !== null)
        position = variables.socialMediaPosition;
    let tweeter = "Twitter";
    if (variables.twitter !== null) tweeter = variables.twitter;
    let platform = "Github";
    if (variables.github !==null) platform=variables.github;
    // reset the website body with the new html output
    document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${aName} ${lName}</h1>
          <h2>${work}</h2>
          <h3>${place}, ${countryname}</h3>
          <ul class= "${position}">
            <li><a href="https://twitter.com/${tweeter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/bharathichinnusamy"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
    window.variables = {
        // if includeCover is true the algorithm should
        includeCover: true,
        // this is the url of the image that will used as background for the profile cover
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
        // this is the url for the profile avatar
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
        // social media bar position (left or right)
        socialMediaPosition: "left",
        // social media usernames
        twitter: null,
        github: "alesanchezr",
        linkedin: null,
        instagram: null,
        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    };
    render(window.variables);
    document.querySelectorAll(".picker").forEach(function(elm) {
        elm.addEventListener("change", function(e) {
            const attribute = e.target.getAttribute("for");
            let values = {};
            values[attribute] =
                this.value == ""
                    ? null
                    : this.value == "true"
                        ? true
                        : this.value == "false"
                            ? false
                            : this.value;
            render(Object.assign(window.variables, values));
        });
    });
};
