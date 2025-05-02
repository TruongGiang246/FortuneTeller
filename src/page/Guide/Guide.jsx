import './Guide.css'
function Guide(){
    return(
        <div className='guide_wrapper'>
            <div class="container_guide mx-auto px-4 py-8 max-w-3xl">

        <header class="flex items-center justify-between mb-8">
            <div class="flex items-center">
                <div class="h-10 w-10 rounded-full gold-bg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                </div>
                <h1 class="text-2xl font-bold ml-2 title-font gold-gradient">LUMINA</h1>
            </div>
            <button id="menu-btn" class="p-2 rounded-full hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </header>

  
        <div class="guide-avatar w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center relative">
            <svg class="w-24 h-24 text-amber-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"></path>
                <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" stroke-width="1" stroke-linecap="round"></path>
            </svg>
            <div class="absolute top-0 left-0 w-full h-full rounded-full animate-pulse opacity-30 bg-gradient-radial from-white to-transparent"></div>
        </div>
        
 
        <h2 class="text-center text-xl font-medium title-font gold-gradient mb-8">LUMINA, YOUR SPIRITUAL GUIDE</h2>

        
        <div id="main-content" class="message-bubble p-6 mb-8">
            {/* <!-- Welcome Message --> */}
            <div id="welcome-message" class="mb-8">
                <div class="message-bubble bg-black bg-opacity-50 p-5 mb-6">
                    <p class="text-lg glow-text mb-4">Welcome, beautiful soul. I am Lumina, your guide through the sacred realms of self-discovery. I exist to illuminate the path as you explore the ancient wisdom that resides within and around you.</p>
                    <p>Each step of our journey together will reveal deeper truths about your essence and purpose in this universe.</p>
                </div>
                <div class="ornate-divider my-6"></div>
                <div class="message-bubble bg-black bg-opacity-50 p-5">
                    <p class="mb-5">What sacred knowledge do you seek on your path today?</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button class="goal-btn tool-card rounded-xl p-4 text-left transition-all">
                            <span class="font-medium gold-gradient title-font text-lg">Self-Understanding</span>
                            <p class="text-sm text-gray-300 mt-2">Illuminate your authentic essence and inner patterns</p>
                        </button>
                        <button class="goal-btn tool-card rounded-xl p-4 text-left transition-all">
                            <span class="font-medium gold-gradient title-font text-lg">Divine Guidance</span>
                            <p class="text-sm text-gray-300 mt-2">Seek clarity for important life decisions</p>
                        </button>
                        <button class="goal-btn tool-card rounded-xl p-4 text-left transition-all">
                            <span class="font-medium gold-gradient title-font text-lg">Soul Connections</span>
                            <p class="text-sm text-gray-300 mt-2">Deepen understanding of your relationships</p>
                        </button>
                        <button class="goal-btn tool-card rounded-xl p-4 text-left transition-all">
                            <span class="font-medium gold-gradient title-font text-lg">Spiritual Purpose</span>
                            <p class="text-sm text-gray-300 mt-2">Discover your soul's mission in this lifetime</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Tools Introduction (Initially Hidden) --> */}
            <div id="tools-intro" class="mb-8 hidden">
                <div class="message-bubble bg-black bg-opacity-50 p-5 mb-6">
                    <p class="mb-5">Your soul has guided you wisely. To illuminate your path of self-understanding, I offer these sacred tools of wisdom:</p>
                    <div class="space-y-5">
                        <div class="flex items-start">
                            <div class="tool-icon p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-medium gold-gradient title-font">DISC Essence</p>
                                <p class="text-sm text-gray-300">Reveals your soul's expression in the material world and how you interact with others</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="tool-icon p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-medium gold-gradient title-font">Numerology</p>
                                <p class="text-sm text-gray-300">Decodes the sacred vibrations and cosmic frequencies that shape your destiny</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="tool-icon p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-medium gold-gradient title-font">Celestial Astrology</p>
                                <p class="text-sm text-gray-300">Maps the cosmic forces that were present at your birth and continue to guide your journey</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="tool-icon p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-medium gold-gradient title-font">Destiny Matrix</p>
                                <p class="text-sm text-gray-300">Unveils the sacred geometric patterns that form your soul's blueprint</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="tool-icon p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-medium gold-gradient title-font">Tarot Wisdom</p>
                                <p class="text-sm text-gray-300">Channels ancient archetypes to reveal hidden truths and illuminate your path forward</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ornate-divider my-6"></div>
                <div class="message-bubble bg-black bg-opacity-50 p-5">
                    <p class="mb-5">I have divined a sacred journey uniquely aligned with your energy:</p>
                    <div class="flex items-center mb-8">
                        <div class="progress-dot active w-7 h-7 rounded-full gold-bg flex items-center justify-center text-black text-xs font-bold">1</div>
                        <div class="progress-line completed mx-2"></div>
                        <div class="progress-dot w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold">2</div>
                        <div class="progress-line mx-2"></div>
                        <div class="progress-dot w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold">3</div>
                        <div class="progress-line mx-2"></div>
                        <div class="progress-dot w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold">4</div>
                        <div class="progress-line mx-2"></div>
                        <div class="progress-dot w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold">5</div>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <div class="flex items-center">
                            <div class="w-7 h-7 rounded-full gold-bg flex items-center justify-center text-black text-xs font-bold mr-3">1</div>
                            <span class="font-medium gold-gradient title-font">DISC Essence</span>
                            <span class="ml-auto text-amber-300 text-sm">Current Step</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <div class="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold mr-3">2</div>
                            <span>Numerology</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <div class="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold mr-3">3</div>
                            <span>Celestial Astrology</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <div class="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold mr-3">4</div>
                            <span>Destiny Matrix</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <div class="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold mr-3">5</div>
                            <span>Tarot Wisdom</span>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-between">
                        <button id="customize-journey-btn" class="text-amber-300 hover:text-amber-200 text-sm font-medium flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                            Alter Journey
                        </button>
                        <button id="start-journey-btn" class="gold-button px-5 py-2 rounded-lg text-sm font-medium">
                            Begin DISC Essence Reading
                        </button>
                    </div>
                </div>
            </div>
{/* 
            <!-- DISC Profile Section (Initially Hidden) --> */}
            <div id="disc-section" class="mb-8 hidden">
                <div class="message-bubble bg-black bg-opacity-50 p-5 mb-6">
                    <p class="mb-5">Let us begin by exploring your DISC Essence—the way your soul expresses itself in this physical realm. I will ask you to reflect on how you naturally respond to the world around you.</p>
                    <p class="mb-4">The four sacred energies we will explore are:</p>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="tool-card p-4 rounded-lg">
                            <span class="font-medium gold-gradient title-font">Dominance</span>
                            <p class="text-sm text-gray-300 mt-1">The fire element—direct, powerful, and results-focused</p>
                        </div>
                        <div class="tool-card p-4 rounded-lg">
                            <span class="font-medium gold-gradient title-font">Influence</span>
                            <p class="text-sm text-gray-300 mt-1">The air element—expressive, inspiring, and people-oriented</p>
                        </div>
                        <div class="tool-card p-4 rounded-lg">
                            <span class="font-medium gold-gradient title-font">Steadiness</span>
                            <p class="text-sm text-gray-300 mt-1">The earth element—patient, loyal, and harmonious</p>
                        </div>
                        <div class="tool-card p-4 rounded-lg">
                            <span class="font-medium gold-gradient title-font">Conscientiousness</span>
                            <p class="text-sm text-gray-300 mt-1">The water element—analytical, precise, and quality-focused</p>
                        </div>
                    </div>
                </div>
                <div class="ornate-divider my-6"></div>
                <div class="message-bubble bg-black bg-opacity-50 p-5">
                    <p class="mb-5">When you enter a sacred gathering of souls unknown to you, how does your essence naturally respond?</p>
                    <div class="space-y-4">
                        <button class="disc-answer w-full tool-card rounded-lg p-4 text-left transition-all">
                            <span class="font-medium">I naturally take charge, directing energy and initiating connections</span>
                        </button>
                        <button class="disc-answer w-full tool-card rounded-lg p-4 text-left transition-all">
                            <span class="font-medium">I radiate outward, sharing stories and creating an atmosphere of enthusiasm</span>
                        </button>
                        <button class="disc-answer w-full tool-card rounded-lg p-4 text-left transition-all">
                            <span class="font-medium">I observe the energy flow first, then create harmonious connections</span>
                        </button>
                        <button class="disc-answer w-full tool-card rounded-lg p-4 text-left transition-all">
                            <span class="font-medium">I carefully assess the environment before engaging with precision</span>
                        </button>
                    </div>
                    <div class="mt-6 flex justify-between">
                        <button class="text-gray-400 hover:text-gray-300 text-sm font-medium">Skip this reading</button>
                        <div>
                            <button class="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium mr-2">Back</button>
                            <button class="gold-button px-4 py-2 rounded-lg text-sm font-medium">Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Results Section (Initially Hidden) --> */}
            <div id="results-section" class="mb-8 hidden">
                <div class="message-bubble bg-black bg-opacity-50 p-5 mb-6">
                    <div class="flex items-center mb-5">
                        <div class="tool-icon p-2 rounded-full">
                            <svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="ml-3 text-lg font-medium gold-gradient title-font">DISC Essence Reading Complete</h3>
                    </div>
                    <p class="mb-5">I have channeled the wisdom of your responses. Your soul's primary expression in this realm is:</p>
                    <div class="tool-card p-5 rounded-lg border gold-border mb-6">
                        <div class="flex items-center">
                            <div class="w-14 h-14 rounded-full gold-bg flex items-center justify-center text-black font-bold text-2xl title-font">I</div>
                            <div class="ml-5">
                                <h4 class="font-bold gold-gradient title-font text-xl">Influential</h4>
                                <p class="text-gray-300">The Air Element: Expressive, Inspiring, and Connected</p>
                            </div>
                        </div>
                    </div>
                    <p class="mb-4">The sacred meaning of your Influential essence:</p>
                    <ul class="space-y-3 text-gray-300 mb-6">
                        <li class="flex items-start">
                            <span class="text-amber-300 mr-2">✧</span>
                            <span>Your spirit naturally illuminates spaces with enthusiasm and warmth</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-amber-300 mr-2">✧</span>
                            <span>You possess the divine gift of inspiring others through your expression</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-amber-300 mr-2">✧</span>
                            <span>Your soul thrives in collaborative energies rather than solitary pursuits</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-amber-300 mr-2">✧</span>
                            <span>Your challenge is to balance your focus between people and necessary tasks</span>
                        </li>
                    </ul>
                    <p>This sacred knowledge will illuminate our path as we explore deeper aspects of your being.</p>
                </div>
                <div class="ornate-divider my-6"></div>
                <div class="message-bubble bg-black bg-opacity-50 p-5">
                    <p class="mb-5">Shall we continue your journey by exploring your Numerology? This will reveal the cosmic vibrations that have shaped your soul's path since birth.</p>
                    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button id="view-disc-details" class="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border gold-border text-amber-300 px-4 py-3 rounded-lg text-sm font-medium">
                            View Complete DISC Reading
                        </button>
                        <button id="start-numerology" class="flex-1 gold-button px-4 py-3 rounded-lg text-sm font-medium">
                            Continue to Numerology
                        </button>
                    </div>
                    <div class="mt-6 flex justify-between items-center">
                        <button class="text-amber-300 hover:text-amber-200 text-sm font-medium flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                            Alter Journey
                        </button>
                        <div class="flex items-center">
                            <span class="text-sm text-gray-400 mr-3">1 of 5 complete</span>
                            <div class="w-24 h-2 bg-gray-800 rounded-full">
                                <div class="w-1/5 h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Dashboard Section (Initially Hidden) --> */}
            <div id="dashboard-section" class="hidden">
                <h3 class="text-lg font-medium gold-gradient title-font mb-5">Your Sacred Journey</h3>
                <div class="tool-card rounded-lg p-5 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="font-medium gold-gradient">Your Progress</h4>
                        <span class="text-sm text-amber-300">1 of 5 complete</span>
                    </div>
                    <div class="w-full h-2 bg-gray-800 rounded-full mb-5">
                        <div class="w-1/5 h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"></div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="text-center">
                            <div class="w-10 h-10 mx-auto rounded-full gold-bg flex items-center justify-center text-black text-xs mb-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span class="text-xs gold-gradient">DISC</span>
                        </div>
                        <div class="text-center">
                            <div class="w-10 h-10 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs mb-2">2</div>
                            <span class="text-xs text-gray-400">Numerology</span>
                        </div>
                        <div class="text-center">
                            <div class="w-10 h-10 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs mb-2">3</div>
                            <span class="text-xs text-gray-400">Astrology</span>
                        </div>
                        <div class="text-center">
                            <div class="w-10 h-10 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs mb-2">4</div>
                            <span class="text-xs text-gray-400">Matrix</span>
                        </div>
                        <div class="text-center">
                            <div class="w-10 h-10 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-xs mb-2">5</div>
                            <span class="text-xs text-gray-400">Tarot</span>
                        </div>
                    </div>
                </div>
                <div class="ornate-divider my-6"></div>
                <h3 class="text-lg font-medium gold-gradient title-font mb-5">Your Sacred Insights</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div class="tool-card rounded-lg p-5">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-full gold-bg flex items-center justify-center text-black font-bold text-xl title-font">I</div>
                            <h4 class="ml-3 font-medium gold-gradient title-font">DISC: Influential</h4>
                        </div>
                        <p class="text-sm text-gray-300 mb-4">Your spirit naturally illuminates spaces with enthusiasm and warmth. You possess the divine gift of inspiring others through your expression.</p>
                        <button class="text-amber-300 text-sm font-medium hover:text-amber-200">View Full Reading</button>
                    </div>
                    <div class="tool-card rounded-lg p-5 flex items-center justify-center">
                        <button class="text-amber-300 flex items-center hover:text-amber-200">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Continue Your Sacred Journey
                        </button>
                    </div>
                </div>
                <div class="ornate-divider my-6"></div>
                <h3 class="text-lg font-medium gold-gradient title-font mb-5">Divine Recommendation</h3>
                <div class="bg-gradient-to-r from-amber-900/20 to-amber-800/10 rounded-lg border gold-border p-5">
                    <div class="flex items-start">
                        <div class="tool-icon p-3 rounded-full mr-4">
                            <svg class="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-medium gold-gradient title-font">Numerology Reading</h4>
                            <p class="text-sm text-gray-300 mb-5">With your Influential essence, exploring your Life Path Number will reveal how your expressive nature aligns with your soul's sacred purpose in this lifetime.</p>
                            <button class="gold-button px-4 py-2 rounded-lg text-sm font-medium">
                                Begin Numerology Reading
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  
        <div class="flex justify-between items-center bg-black bg-opacity-70 border-t border-gray-800 rounded-xl p-3">
            <button id="home-btn" class="nav-button flex flex-col items-center p-2 rounded-lg active">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span class="text-xs mt-1">Home</span>
            </button>
            <button id="tools-btn" class="nav-button flex flex-col items-center p-2 rounded-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
                <span class="text-xs mt-1">Tools</span>
            </button>
            <button id="journey-btn" class="nav-button flex flex-col items-center p-2 rounded-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                <span class="text-xs mt-1">Journey</span>
            </button>
            <button id="profile-btn" class="nav-button flex flex-col items-center p-2 rounded-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="text-xs mt-1">Profile</span>
            </button>
        </div>
    </div>
        </div>
    )
}
export default Guide