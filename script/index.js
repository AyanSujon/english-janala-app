
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
            if(words.length === 0){
            WordContainer.innerHTML = `
        <div class="text-center col-span-full rounded-xl py-10 space-y-6 hind-siliguri-font">
            <img class="mx-auto" src="./assets/alert-error.png" alt="Alert Error">
            <p class="text-xl font-medium text-gray-500 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-3xl ">নেক্সট Lesson এ যান</h2>
        </div>

            `;
            return;
        }
        
// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }

    words.forEach(word => {
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word: "শব্দ পাওয়া যায়নি"}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium hind-siliguri-font">"${word.meaning ? word.meaning: "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation: "Pronunciation পাওয়া যায়নি"}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
                
            </div>
        </div>

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