
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Promise of response
    .then(res => res.json()) // promise of json data 
    .then(json => displayLesson(json.data))
}
const loadLevelWord = (id) => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data));
}
const displayLevelWord = (words) => {
    // console.log(words);
    const WordContainer = document.getElementById("word-container");
    WordContainer.innerHTML = "";
    words.forEach(word => {
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <p>Card</p>

        `
        WordContainer.append(card);
    })
}

const displayLesson = (lessons) => {
    // 1. get the container $ empty 
    const levelContainer = document.getElementById("lebel-container");
    levelContainer.innerHTML = "";

    // 2. get into every lessons
    for( let lesson of lessons){
        // console.log(lesson)
    // 3. create element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" href="#" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        
        
        `
        levelContainer.append(btnDiv);

    // 4. append into container
    }


};

loadLessons();