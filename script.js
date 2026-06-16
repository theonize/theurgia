const chapters = [
  {
    kicker: "Preface",
    title: "Why this book exists",
    summary:
      "Theurgia takes a word the church once used for ritual that tried to compel the divine and turns it inside out: the only true god-working is God's own work for us in Christ. The book opens by naming that hope, declaring its Protestant and creedal, Scripture-led standpoint, and refusing any practice that competes with Christ, Scripture, or grace.",
    questions: [
      "Why name this book Theurgia, a word once used for rituals meant to compel the divine, and what does turning it inside out reveal?",
      "What do Christians often mean by mysticism, and where does that language help or harm?",
      "How can wonder, beauty, and longing be submitted to the lordship of Jesus rather than used to manage him?",
      "From which tradition and reading of Scripture will this book judge, and what guardrails keep that honest?",
    ],
    interactions: [
      "A glossary toggle for contested terms such as theurgy, mysticism, magic, sacrament, and superstition.",
      "A reader covenant that names the book's standpoint, Protestant and creedal, and commits to reading Scripture as its own best interpreter under the rule of faith.",
    ],
    passages: [
      "Acts 19:13-20 (new believers burn their books of spells)",
      "John 4:23-24 (worship in spirit and truth)",
      "1 Corinthians 2:1-5 (faith resting on God's power, not persuasive technique)",
      "Colossians 2:6-8 (continue in Christ, beware hollow philosophy)",
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
    passages: [
      "1 Corinthians 15:1-8 (the Gospel defined and delivered)",
      "Ephesians 2:1-10 (saved by grace through faith, not works)",
      "Galatians 2:20 (no longer I who live, but Christ in me)",
      "Romans 8:14-17 (the Spirit of adoption)",
    ],
    prompt: "Where are you tempted to replace trust in Christ with spiritual control?",
  },
  {
    kicker: "Chapter 2",
    title: "Biblical Mysticism",
    summary:
      "A survey of how God draws near, from theophany and temple to incarnation and Pentecost, gives Christian mysticism a positive Biblical shape, then marks where it parts from occult mastery, spectacle, and forbidden divination.",
    questions: [
      "How do theophany, temple, incarnation, and Pentecost shape Christian encounter?",
      "What is the difference between revelation received and power seized?",
      "How should readers weigh experience without enthroning experience?",
    ],
    interactions: [
      "A timeline of major Biblical encounter scenes.",
      "A compare-and-contrast card deck for communion, revelation, wisdom, and divination.",
    ],
    passages: [
      "Exodus 24:9-18 (the elders see God and eat before him)",
      "Isaiah 6:1-8 (Isaiah undone in the temple)",
      "John 1:14-18 (the Word made flesh makes God known)",
      "Acts 2:1-21 (the Spirit poured out at Pentecost)",
    ],
    prompt: "Which Biblical encounter with God most challenges your assumptions?",
  },
  {
    kicker: "Chapter 3",
    title: "The Christian Mystical Tradition",
    summary:
      "Before judging mysticism, the book listens to it, tracing how the Desert Fathers, Pseudo-Dionysius, the medieval contemplatives, Orthodox hesychasm, and the Reformed sense of the heart sought God, and where each tradition illumines or endangers Gospel faith.",
    questions: [
      "What have Christians across the centuries actually meant by union with God, the dark night, and the prayer of the heart?",
      "Where did the tradition draw on Neoplatonism and theurgy, and how did figures like Augustine resist it?",
      "How can later readers receive the tradition's wisdom without inheriting its errors?",
    ],
    interactions: [
      "A timeline of contemplative writers from the Desert Fathers to Edwards.",
      "A source reader pairing primary texts with brief Gospel-centered commentary.",
    ],
    passages: [
      "Exodus 33:18-23 (Moses asks to see God's glory)",
      "1 Kings 19:11-13 (Elijah and the low whisper)",
      "2 Corinthians 12:1-10 (Paul's ascent and his thorn)",
      "Colossians 3:1-4 (your life hidden with Christ in God)",
    ],
    prompt: "Which voice from church history do you most want, or most fear, to learn from?",
  },
  {
    kicker: "Chapter 4",
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
    passages: [
      "Exodus 15:1-21 (the song at the sea)",
      "1 Samuel 16:14-23 (David's harp quiets Saul's torment)",
      "Psalm 137 (singing, and refusing to sing, in exile)",
      "Colossians 3:16 (psalms, hymns, and spiritual songs)",
    ],
    prompt: "Name one song that has formed you spiritually. What did it teach you to love?",
  },
  {
    kicker: "Chapter 5",
    title: "Relics and Memory",
    summary:
      "This chapter asks how Christians can honor embodied memory, including images and holy places, without assigning saving or mechanical power to objects.",
    questions: [
      "What does Scripture say about memorials, bones, garments, images, and holy places?",
      "How do incarnation and resurrection dignify material creation without making it ultimate?",
      "When does remembrance cross into superstition or idolatry?",
    ],
    interactions: [
      "A material-culture inventory for objects that shape devotion.",
      "A discernment slider from remembrance to reverence to reliance.",
    ],
    passages: [
      "Joshua 4:1-7 (stones of remembrance at the Jordan)",
      "2 Kings 18:1-4 (Hezekiah destroys the bronze serpent turned idol)",
      "2 Kings 13:20-21 (life at the bones of Elisha)",
      "Acts 19:11-12 (cloths from Paul, and the power that is not his)",
    ],
    prompt: "What object, place, or memory has helped you remember God's faithfulness?",
  },
  {
    kicker: "Chapter 6",
    title: "Sacraments and the Means of Grace",
    summary:
      "Here the book faces its hardest case of grace through matter, asking how baptism and the Lord's Supper give Christ to faith without becoming machines that dispense him by mere performance.",
    questions: [
      "What do the Scriptures promise in baptism and the Supper, and to whom are those promises given?",
      "How do real presence, memorial, and grace received through faith differ, and where does each guard or distort the Gospel?",
      "When does a means of grace quietly become an act of magic that works apart from faith?",
    ],
    interactions: [
      "A comparison table of major sacramental views set beside their key texts.",
      "A worship-design checklist for keeping the elements tied to the Word and to faith.",
    ],
    passages: [
      "Matthew 28:18-20 (baptizing and teaching the nations)",
      "Romans 6:1-11 (buried and raised with Christ in baptism)",
      "1 Corinthians 11:23-34 (the Supper proclaimed and examined)",
      "1 Corinthians 10:1-13 (sacraments do not shield an unbelieving heart)",
    ],
    prompt: "What do you most hope is happening when you eat the bread and drink the cup?",
  },
  {
    kicker: "Chapter 7",
    title: "Prophecy and Speech",
    summary:
      "The book first honors the God-given weight of human speech to bless, confess, and tell the truth, then weighs prophecy, curse, and self-fulfilling words under Biblical tests of truth, love, and submission to God.",
    questions: [
      "What good has God given human words the power to do, and what can words never do?",
      "How does Biblical prophecy differ from positive thinking, prosperity claims, or fatalistic declaration?",
      "How should communities test claims without despising the Spirit's work?",
    ],
    interactions: [
      "A speech audit for promises, vows, blessings, curses, and labels.",
      "A prophecy-testing flowchart centered on Scripture, fruit, accountability, and fulfillment.",
    ],
    passages: [
      "Deuteronomy 18:15-22 (the test of a true prophet)",
      "Proverbs 18:21 (death and life in the power of the tongue)",
      "1 Corinthians 14:29-33 (weighing prophecy in the assembly)",
      "James 3:1-12 (the untamed tongue)",
    ],
    prompt: "What repeated words have shaped your expectations of God, yourself, or others?",
  },
  {
    kicker: "Chapter 8",
    title: "Spiritual Gifts and the Spirit's Power",
    summary:
      "Moving from prophecy to the wider gifts, the book considers tongues, healing, words of knowledge, and miracles as real works of the Spirit for building up the church, and weighs the cessationist and continuationist debate without quenching the Spirit or chasing spectacle.",
    questions: [
      "What are spiritual gifts for, and how does love govern their use in the assembly?",
      "How should Christians weigh the cessationist and continuationist readings of tongues, healing, and prophecy?",
      "When does hunger for the miraculous slide into spectacle, pressure, or the manufacture of signs?",
    ],
    interactions: [
      "A gifts inventory tied to the body-of-Christ texts rather than to personality.",
      "An order-of-worship guide for exercising gifts with intelligibility, testing, and peace.",
    ],
    passages: [
      "1 Corinthians 12:4-11 (varieties of gifts, one Spirit)",
      "1 Corinthians 14:1-25 (intelligible upbuilding over private ecstasy)",
      "Acts 2:1-12 (tongues understood at Pentecost)",
      "James 5:13-16 (prayer and anointing for the sick)",
    ],
    prompt: "Which spiritual gift do you most desire, and what do you want it for?",
  },
  {
    kicker: "Chapter 9",
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
    passages: [
      "Matthew 6:9-13 (the pattern of the Lord's Prayer)",
      "Luke 11:1-13 (ask, seek, knock, and the Father's good gifts)",
      "Psalm 13 (lament that ends in trust)",
      "Romans 8:26-27 (the Spirit intercedes in our weakness)",
    ],
    prompt: "Which part of prayer feels most difficult for you right now?",
  },
  {
    kicker: "Chapter 10",
    title: "Fasting and the Body",
    summary:
      "The book turns to the body as a place of discipleship, treating fasting, feasting, and Sabbath as ways the whole person seeks God, while refusing any view that earns merit or despises the flesh God made and will raise.",
    questions: [
      "What does Scripture promise, and refuse to promise, to the one who fasts?",
      "How do fasting, feasting, and Sabbath together train desire and trust?",
      "When does bodily discipline curdle into earning, performance, or contempt for the body?",
    ],
    interactions: [
      "A rhythm planner for fasting, feasting, and Sabbath across a season.",
      "A motive examen distinguishing hunger for God from hunger for control or merit.",
    ],
    passages: [
      "Isaiah 58:1-12 (the fast that God chooses)",
      "Matthew 6:16-18 (fast in secret, not for show)",
      "Matthew 9:14-17 (fasting and the presence of the bridegroom)",
      "1 Corinthians 6:19-20 (glorify God in your body)",
    ],
    prompt: "What does your body do when you are anxious for God to act, and what might fasting reorder?",
  },
  {
    kicker: "Chapter 11",
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
    passages: [
      "Joshua 1:8 (meditate on the law day and night)",
      "Psalm 1:1-3 (the blessed one who meditates)",
      "Psalm 119:9-16 (delighting in and pondering the Word)",
      "Philippians 4:8 (think on what is true and lovely)",
    ],
    prompt: "What most often captures your attention away from God and neighbor?",
  },
  {
    kicker: "Chapter 12",
    title: "Contemplative Prayer and the Silence",
    summary:
      "Building on Scripture-filled meditation, the book weighs centering prayer, the Jesus Prayer, breath prayer, and the summons to silence, distinguishing rest in a God who has spoken from techniques that seek an empty or contentless union.",
    questions: [
      "What is the difference between silence before a God who speaks and silence as a method for dissolving the self?",
      "How should readers weigh contemplative practices such as centering prayer and lectio divina that mix Biblical and questionable roots?",
      "Can stillness deepen love for God and neighbor rather than become a retreat from them?",
    ],
    interactions: [
      "A practice card sorting contemplative methods by their assumptions about God and the self.",
      "A guided silence exercise anchored in a spoken promise of Scripture.",
    ],
    passages: [
      "Psalm 46:10 (be still and know that I am God)",
      "Psalm 131 (a quieted soul like a weaned child)",
      "Habakkuk 2:20 (let all the earth keep silence before him)",
      "Matthew 6:5-8 (not heaping up empty phrases)",
    ],
    prompt: "What happens in you when you try to be silent before God?",
  },
  {
    kicker: "Chapter 13",
    title: "Divine Hiddenness and the Dark Night",
    summary:
      "Against the demand for constant experience, the book honors the seasons when God seems absent, reading dryness, waiting, and the dark night as places where faith is purified rather than signs that something has gone wrong.",
    questions: [
      "How does Scripture portray the felt absence of God, and how do the saints pray through it?",
      "What distinguishes the dark night of purifying faith from the dullness of unrepented sin or despair?",
      "How can believers love and obey God when feeling and assurance run dry?",
    ],
    interactions: [
      "A psalter map pairing seasons of the soul with psalms that voice them.",
      "A waiting journal that tracks fidelity rather than feeling.",
    ],
    passages: [
      "Psalm 88 (a prayer that ends in darkness)",
      "Psalm 42-43 (why are you cast down, O my soul)",
      "Job 23:1-12 (I go forward but he is not there)",
      "Isaiah 50:10 (walking in darkness, trusting the name of the Lord)",
    ],
    prompt: "Where has God felt absent, and what has kept you, or failed to keep you, holding on?",
  },
  {
    kicker: "Chapter 14",
    title: "Practices from Other Faiths",
    summary:
      "The book asks how Christians should treat practices with non-Christian roots, from yoga and mindfulness to mantras and energy healing, discerning what may be received as common grace, what must be reformed, and what cannot be baptized.",
    questions: [
      "When is a practice merely cultural and bodily, and when does it carry a rival theology?",
      "How do plundering Egypt's gold and refusing the table of demons both inform Christian freedom?",
      "What questions should a believer ask before adopting a practice from another religion?",
    ],
    interactions: [
      "A sorting tool that maps a practice to its origin, its claims, and its likely effect on faith.",
      "A decision guide for receive, reform, or refuse.",
    ],
    passages: [
      "Daniel 1:8-21 (serving in Babylon without defilement)",
      "Exodus 12:35-36 (Israel carries away Egypt's gold)",
      "1 Corinthians 10:18-22 (you cannot share the table of the Lord and of demons)",
      "Colossians 2:8-23 (warnings against hollow philosophy and self-made religion)",
    ],
    prompt: "Which practice from another tradition are you drawn to, and what does it promise you?",
  },
  {
    kicker: "Chapter 15",
    title: "Incantations and Power",
    summary:
      "Holding up faithful, trusting prayer as the contrast, this chapter confronts practices that use sacred words, sounds, or formulas as mechanisms of control rather than acts of faith.",
    questions: [
      "Why does Scripture forbid sorcery, divination, and manipulative spiritual power?",
      "How can Christian language be misused as an incantation?",
      "What makes a repeated prayer faithful rather than magical?",
    ],
    interactions: [
      "A formula-versus-faith comparison table.",
      "A practice review that flags coercion, fear, secrecy, and promised control.",
    ],
    passages: [
      "Deuteronomy 18:9-14 (no sorcery or divination in Israel)",
      "Acts 8:9-24 (Simon Magus tries to buy the Spirit's power)",
      "Galatians 5:19-21 (sorcery among the works of the flesh)",
      "Matthew 6:7 (do not heap up empty phrases like the pagans)",
    ],
    prompt: "Where do you see spiritual language used as a guarantee of control?",
  },
  {
    kicker: "Chapter 16",
    title: "Spiritual Warfare and Deliverance",
    summary:
      "The book confronts the reality of the demonic and the church's authority in Christ, charting a course between the denial that treats evil as mere metaphor and the obsession that sees a demon behind every struggle or turns deliverance into technique.",
    questions: [
      "What authority does the believer actually have over evil powers, and from where does it come?",
      "How do Scripture's accounts of deliverance differ from spiritual mapping, formulas, and sensational deliverance ministry?",
      "How should the church discern between the demonic, the bodily, and the sinful without collapsing them?",
    ],
    interactions: [
      "A spiritual-armor study mapping Ephesians 6 onto everyday faithfulness.",
      "A pastoral checklist for sober, accountable care in cases of suspected oppression.",
    ],
    passages: [
      "Ephesians 6:10-18 (the whole armor of God)",
      "Luke 10:17-20 (rejoice that your names are written in heaven)",
      "Mark 9:14-29 (a deliverance that comes only by prayer)",
      "Acts 19:13-16 (the sons of Sceva and borrowed authority)",
    ],
    prompt: "Where are you tempted either to ignore spiritual evil or to become preoccupied with it?",
  },
  {
    kicker: "Chapter 17",
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
    passages: [
      "1 Thessalonians 5:19-22 (test everything, hold to the good)",
      "1 John 4:1-6 (test the spirits)",
      "1 Corinthians 12:1-3 (no one says Jesus is Lord except by the Spirit)",
      "Matthew 7:15-20 (you will know them by their fruit)",
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
    passages: [
      "Acts 17:10-12 (the Bereans examine the Scriptures daily)",
      "2 Timothy 3:14-17 (all Scripture profitable for training)",
      "Nehemiah 8:1-8 (reading and explaining the Word to the people)",
    ],
    prompt: "What appendix would most help you continue the study faithfully?",
  },
];

const chapterButtons = [...document.querySelectorAll(".chapter-link")];
const kicker = document.querySelector("#chapter-kicker");
const title = document.querySelector("#chapter-title");
const summary = document.querySelector("#chapter-summary");
const passages = document.querySelector("#chapter-passages");
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
  renderList(passages, chapter.passages);
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
