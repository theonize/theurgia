const chapters = [
  {
    kicker: "Preface",
    title: "Why this book exists",
    summary:
      "Theurgia opens by naming the desire for encounter with God while refusing any practice that competes with Christ, Scripture, or grace.",
    questions: [
      "What do Christians often mean by mysticism, and where does that language help or harm?",
      "How can wonder, beauty, and longing be submitted to the lordship of Jesus?",
      "What guardrails will keep the inquiry Biblical, pastoral, and honest?",
    ],
    interactions: [
      "A reader covenant that records interpretive commitments.",
      "A glossary toggle for contested terms such as mysticism, magic, sacrament, and superstition.",
    ],
    prompt: "What hopes or concerns do you bring to a study of Christian mysticism?",
  },
  {
    kicker: "Chapter 1",
    title: "The Gospel Center",
    summary:
      "This chapter establishes Christ's finished work, union with Christ, Scripture, and the Spirit's ministry as the controlling center for every later topic.",
    questions: [
      "What does the Gospel promise that spiritual technique cannot provide?",
      "How do justification, sanctification, and adoption reshape mystical longing?",
      "Which practices obscure grace by making power feel mechanically controlled?",
    ],
    interactions: [
      "A doctrinal anchor map connecting each practice to Gospel claims.",
      "A diagnostic checklist for grace, control, fear, and fruit.",
    ],
    prompt: "Where are you tempted to replace trust in Christ with spiritual control?",
  },
  {
    kicker: "Chapter 2",
    title: "Biblical Mysticism",
    summary:
      "A survey of Biblical encounters with God distinguishes covenantal communion from occult mastery, spectacle, and forbidden divination.",
    questions: [
      "How do theophany, temple, incarnation, and Pentecost shape Christian encounter?",
      "What is the difference between revelation received and power seized?",
      "How should readers weigh experience without enthroning experience?",
    ],
    interactions: [
      "A timeline of major Biblical encounter scenes.",
      "A compare-and-contrast card deck for communion, revelation, wisdom, and divination.",
    ],
    prompt: "Which Biblical encounter with God most challenges your assumptions?",
  },
  {
    kicker: "Chapter 3",
    title: "Music and Formation",
    summary:
      "Music is treated as a formative gift that can serve worship, memory, lament, courage, and manipulation depending on its content and use.",
    questions: [
      "How does Scripture depict song in worship, battle, grief, teaching, and celebration?",
      "When does musical repetition become meditation, and when might it become manipulation?",
      "What criteria help evaluate lyrics, atmosphere, and embodied participation?",
    ],
    interactions: [
      "A listening journal for lyrics, affections, theology, and fruit.",
      "A worship-practice matrix for congregation, concert, private devotion, and ritual use.",
    ],
    prompt: "Name one song that has formed you spiritually. What did it teach you to love?",
  },
  {
    kicker: "Chapter 4",
    title: "Relics and Memory",
    summary:
      "This chapter asks how Christians can honor embodied memory without assigning saving or mechanical power to objects.",
    questions: [
      "What does Scripture say about memorials, bones, garments, and holy places?",
      "How do incarnation and resurrection dignify material creation without making it ultimate?",
      "When does remembrance cross into superstition or idolatry?",
    ],
    interactions: [
      "A material-culture inventory for objects that shape devotion.",
      "A discernment slider from remembrance to reverence to reliance.",
    ],
    prompt: "What object, place, or memory has helped you remember God's faithfulness?",
  },
  {
    kicker: "Chapter 5",
    title: "Prophecy and Speech",
    summary:
      "The book then examines prophecy, blessing, curse, confession, and self-fulfilling speech under Biblical tests of truth, love, and submission to God.",
    questions: [
      "How does Biblical prophecy differ from positive thinking or fatalistic declaration?",
      "What power does speech have, and what power does it not have?",
      "How should communities test claims without despising the Spirit's work?",
    ],
    interactions: [
      "A speech audit for promises, vows, blessings, curses, and labels.",
      "A prophecy-testing flowchart centered on Scripture, fruit, accountability, and fulfillment.",
    ],
    prompt: "What repeated words have shaped your expectations of God, yourself, or others?",
  },
  {
    kicker: "Chapter 6",
    title: "Prayer and Petition",
    summary:
      "Prayer is framed as childlike communion with the Father through the Son by the Spirit, not a technique for forcing divine outcomes.",
    questions: [
      "How do adoration, confession, thanksgiving, lament, intercession, and petition belong together?",
      "What does persistence in prayer mean without treating prayer as leverage?",
      "How do unanswered prayers form hope, patience, and surrender?",
    ],
    interactions: [
      "A guided prayer builder based on Biblical prayer patterns.",
      "A lament-to-hope exercise that preserves honesty before God.",
    ],
    prompt: "Which part of prayer feels most difficult for you right now?",
  },
  {
    kicker: "Chapter 7",
    title: "Meditation and Attention",
    summary:
      "Meditation is presented as Scripture-saturated attention that renews the mind, trains desire, and rests in God's presence.",
    questions: [
      "How does Biblical meditation differ from emptying, escape, or self-deification?",
      "What role do silence, memorization, imagination, and attention play in discipleship?",
      "How can readers practice stillness without detaching from truth or neighbor-love?",
    ],
    interactions: [
      "A slow-reading passage viewer with prompts for observation, prayer, and obedience.",
      "A distraction examen for attention, anxiety, and desire.",
    ],
    prompt: "What most often captures your attention away from God and neighbor?",
  },
  {
    kicker: "Chapter 8",
    title: "Incantations and Power",
    summary:
      "This chapter confronts practices that use sacred words, sounds, or formulas as mechanisms of control rather than acts of faith.",
    questions: [
      "Why does Scripture forbid sorcery, divination, and manipulative spiritual power?",
      "How can Christian language be misused as an incantation?",
      "What makes a repeated prayer faithful rather than magical?",
    ],
    interactions: [
      "A formula-versus-faith comparison table.",
      "A practice review that flags coercion, fear, secrecy, and promised control.",
    ],
    prompt: "Where do you see spiritual language used as a guarantee of control?",
  },
  {
    kicker: "Chapter 9",
    title: "A Rule of Discernment",
    summary:
      "The constructive close offers a portable rule for evaluating practices by Christ, Scripture, church accountability, love, humility, and fruit.",
    questions: [
      "Does this practice confess Jesus as Lord in substance, not merely vocabulary?",
      "Does it deepen repentance, faith, love, and obedience?",
      "Can it be practiced openly with wise pastoral accountability?",
    ],
    interactions: [
      "A reusable discernment rubric with exportable notes.",
      "A decision tree for receive, revise, pause, or reject.",
    ],
    prompt: "Which discernment criterion do you most need to strengthen?",
  },
  {
    kicker: "Appendices",
    title: "Tools for study and conversation",
    summary:
      "Appendices collect Scripture indexes, historical notes, pastoral conversation guides, music-review worksheets, and recommended next steps.",
    questions: [
      "Which passages should readers study before forming conclusions?",
      "What historical categories need careful, charitable definition?",
      "How can small groups discuss controversial practices without fear or sensationalism?",
    ],
    interactions: [
      "Printable worksheets for group discussion and personal review.",
      "A searchable Scripture and topic index.",
    ],
    prompt: "What appendix would most help you continue the study faithfully?",
  },
];

const chapterButtons = [...document.querySelectorAll(".chapter-link")];
const kicker = document.querySelector("#chapter-kicker");
const title = document.querySelector("#chapter-title");
const summary = document.querySelector("#chapter-summary");
const questions = document.querySelector("#chapter-questions");
const interactions = document.querySelector("#chapter-interactions");
const prompt = document.querySelector("#reflection-prompt");
const reflectionInput = document.querySelector("#reflection-input");
const saveButton = document.querySelector("#save-reflection");
const saveStatus = document.querySelector("#save-status");
const previousButton = document.querySelector("#previous-chapter");
const nextButton = document.querySelector("#next-chapter");

let currentChapter = 0;

function renderList(element, items) {
  element.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }),
  );
}

function storageKey(index) {
  return `theurgia-reflection-${index}`;
}

function renderChapter(index) {
  const chapter = chapters[index];
  currentChapter = index;

  kicker.textContent = chapter.kicker;
  title.textContent = chapter.title;
  summary.textContent = chapter.summary;
  renderList(questions, chapter.questions);
  renderList(interactions, chapter.interactions);
  prompt.textContent = chapter.prompt;
  reflectionInput.value = localStorage.getItem(storageKey(index)) || "";
  saveStatus.textContent = "";

  previousButton.disabled = index === 0;
  nextButton.disabled = index === chapters.length - 1;

  chapterButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.chapter) === index);
  });
}

chapterButtons.forEach((button) => {
  button.addEventListener("click", () => renderChapter(Number(button.dataset.chapter)));
});

previousButton.addEventListener("click", () => renderChapter(Math.max(0, currentChapter - 1)));
nextButton.addEventListener("click", () =>
  renderChapter(Math.min(chapters.length - 1, currentChapter + 1)),
);

saveButton.addEventListener("click", () => {
  localStorage.setItem(storageKey(currentChapter), reflectionInput.value);
  saveStatus.textContent = "Saved in this browser.";
});

renderChapter(currentChapter);
