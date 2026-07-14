// Each puzzle has 3 triplets. The player finds the word that FOLLOWS
// all three clues to form a compound word or common phrase.
const puzzles = {
  '2026-06-30': {
    triplets: [
      { clues: ['TOOTH', 'HAIR', 'PAINT'], answer: 'BRUSH' },
      { clues: ['FOOT', 'BASKET', 'VOLLEY'], answer: 'BALL' },
      { clues: ['OVER', 'CHALK', 'SURF'], answer: 'BOARD' },
    ],
  },
  '2026-07-01': {
    triplets: [
      { clues: ['SUN', 'WALL', 'CORN'], answer: 'FLOWER' },
      { clues: ['HEAD', 'ARM', 'ROCK'], answer: 'BAND' },
      { clues: ['BLUE', 'THUNDER', 'LADY'], answer: 'BIRD' },
    ],
  },
  '2026-07-02': {
    triplets: [
      { clues: ['OVER', 'OUT', 'IN'], answer: 'COME' },
      { clues: ['POST', 'WILD', 'CREDIT'], answer: 'CARD' },
      { clues: ['FIRE', 'BIRTH', 'HIDING'], answer: 'PLACE' },
    ],
  },
  '2026-07-03': {
    triplets: [
      { clues: ['SUN', 'MOON', 'FLASH'], answer: 'LIGHT' },
      { clues: ['BALL', 'SHOW', 'MUSH'], answer: 'ROOM' },
      { clues: ['BUTTER', 'WORLD', 'EGG'], answer: 'CUP' },
    ],
  },
  '2026-07-04': {
    triplets: [
      { clues: ['HAND', 'AIR', 'SAND'], answer: 'BAG' },
      { clues: ['BLACK', 'STRAW', 'BLUE'], answer: 'BERRY' },
      { clues: ['BOOK', 'STAIR', 'BRIEF'], answer: 'CASE' },
    ],
  },
  '2026-07-05': {
    triplets: [
      { clues: ['SNOW', 'DOWN', 'WATER'], answer: 'FALL' },
      { clues: ['OVER', 'RAIN', 'SUGAR'], answer: 'COAT' },
      { clues: ['BACK', 'PLAY', 'UNDER'], answer: 'GROUND' },
    ],
  },
  '2026-07-06': {
    triplets: [
      { clues: ['BODY', 'LIFE', 'MUD'], answer: 'GUARD' },
      { clues: ['FIRE', 'ROAD', 'BLIND'], answer: 'SIDE' },
      { clues: ['EYE', 'HIGH', 'LOW'], answer: 'BROW' },
    ],
  },
  '2026-07-07': {
    triplets: [
      { clues: ['HAIR', 'KING', 'TIE'], answer: 'PIN' },
      { clues: ['DOOR', 'DUMB', 'BAR'], answer: 'BELL' },
      { clues: ['BOOK', 'TRADE', 'SKID'], answer: 'MARK' },
    ],
  },
  '2026-07-08': {
    triplets: [
      { clues: ['KEY', 'SAND', 'LIME'], answer: 'STONE' },
      { clues: ['THUMB', 'FINGER', 'TOE'], answer: 'NAIL' },
      { clues: ['AIR', 'PASS', 'TRANS'], answer: 'PORT' },
    ],
  },
  '2026-07-09': {
    triplets: [
      { clues: ['BREAK', 'COUNT', 'SHOW'], answer: 'DOWN' },
      { clues: ['SET', 'DRAW', 'CUT'], answer: 'BACK' },
      { clues: ['FRIEND', 'KIN', 'HARD'], answer: 'SHIP' },
    ],
  },
  '2026-07-10': {
    triplets: [
      { clues: ['SWIM', 'JUMP', 'LAW'], answer: 'SUIT' },
      { clues: ['SUN', 'HEART', 'WIND'], answer: 'BURN' },
      { clues: ['TENNIS', 'FOOD', 'SUPREME'], answer: 'COURT' },
    ],
  },
  '2026-07-11': {
    triplets: [
      { clues: ['FIRST', 'WORLD', 'MIDDLE'], answer: 'CLASS' },
      { clues: ['DRUG', 'BOOK', 'SUPER'], answer: 'STORE' },
      { clues: ['BLOW', 'BONE', 'TUMBLE'], answer: 'DRY' },
    ],
  },
  '2026-07-12': {
    triplets: [
      { clues: ['KEY', 'FOOT', 'BANK'], answer: 'NOTE' },
      { clues: ['TAP', 'BREAK', 'LAP'], answer: 'DANCE' },
      { clues: ['SAUCE', 'DUST', 'BED'], answer: 'PAN' },
    ],
  },
  '2026-07-13': {
    triplets: [
      { clues: ['GROUND', 'DANCE', 'SHOP'], answer: 'FLOOR' },
      { clues: ['CARRY', 'LOG', 'TURN'], answer: 'ON' },
      { clues: ['OFF', 'SEA', 'LAKE'], answer: 'SHORE' },
    ],
  },
  '2026-07-14': {
    triplets: [
      { clues: ['WATCH', 'CLOCK', 'BELL'], answer: 'TOWER' },
      { clues: ['CART', 'FLY', 'WATER'], answer: 'WHEEL' },
      { clues: ['SUN', 'FLAT', 'THATCH'], answer: 'ROOF' },
    ],
  },
  '2026-07-15': {
    triplets: [
      { clues: ['AIR', 'WORK', 'CRAWL'], answer: 'SPACE' },
      { clues: ['BABY', 'RAIN', 'BRIDAL'], answer: 'SHOWER' },
      { clues: ['STONE', 'ICE', 'BITTER'], answer: 'COLD' },
    ],
  },
  '2026-07-16': {
    triplets: [
      { clues: ['SEA', 'RACE', 'WORK'], answer: 'HORSE' },
      { clues: ['YEAR', 'CHECK', 'SCRAP'], answer: 'BOOK' },
      { clues: ['UP', 'MID', 'HOME'], answer: 'TOWN' },
    ],
  },
  '2026-07-17': {
    triplets: [
      { clues: ['RACE', 'SOUND', 'OFF'], answer: 'TRACK' },
      { clues: ['RED', 'FIRE', 'SLY'], answer: 'FOX' },
      { clues: ['GINGER', 'SHORT', 'FLAT'], answer: 'BREAD' },
    ],
  },
  '2026-07-18': {
    triplets: [
      { clues: ['MAN', 'HORSE', 'WILL'], answer: 'POWER' },
      { clues: ['BUMBLE', 'HONEY', 'SPELLING'], answer: 'BEE' },
      { clues: ['ALARM', 'GRANDFATHER', 'CUCKOO'], answer: 'CLOCK' },
    ],
  },
  '2026-07-19': {
    triplets: [
      { clues: ['HOME', 'LOVE', 'SEA'], answer: 'SICK' },
      { clues: ['HAND', 'GRAND', 'NEWS'], answer: 'STAND' },
      { clues: ['HAIR', 'FISH', 'INTER'], answer: 'NET' },
    ],
  },
  '2026-07-20': {
    triplets: [
      { clues: ['HOUSE', 'STRONG', 'FOOT'], answer: 'HOLD' },
      { clues: ['FIRE', 'SEA', 'STONE'], answer: 'WALL' },
      { clues: ['NIGHT', 'HUB', 'KNEE'], answer: 'CAP' },
    ],
  },
  '2026-07-21': {
    triplets: [
      { clues: ['HORSE', 'SNOW', 'GUM'], answer: 'SHOE' },
      { clues: ['WERE', 'LONE', 'GRAY'], answer: 'WOLF' },
      { clues: ['RATTLE', 'SEA', 'GRASS'], answer: 'SNAKE' },
    ],
  },
  '2026-07-22': {
    triplets: [
      { clues: ['WORK', 'LAY', 'BLACK'], answer: 'OUT' },
      { clues: ['LIFT', 'PLAY', 'SHOW'], answer: 'OFF' },
      { clues: ['GOLD', 'JELLY', 'CAT'], answer: 'FISH' },
    ],
  },
  '2026-07-23': {
    triplets: [
      { clues: ['FOG', 'SHOE', 'LONG'], answer: 'HORN' },
      { clues: ['BOXING', 'OVEN', 'HOCKEY'], answer: 'GLOVE' },
      { clues: ['HEDGE', 'WART', 'GROUND'], answer: 'HOG' },
    ],
  },
  '2026-07-24': {
    triplets: [
      { clues: ['PAN', 'CUP', 'FRUIT'], answer: 'CAKE' },
      { clues: ['WHIRL', 'CROSS', 'TAIL'], answer: 'WIND' },
      { clues: ['TEDDY', 'POLAR', 'GRIZZLY'], answer: 'BEAR' },
    ],
  },
  '2026-07-25': {
    triplets: [
      { clues: ['DEAD', 'PAD', 'GRID'], answer: 'LOCK' },
      { clues: ['PACK', 'MUSK', 'LAB'], answer: 'RAT' },
      { clues: ['WATER', 'STORE', 'FORE'], answer: 'FRONT' },
    ],
  },
  '2026-07-26': {
    triplets: [
      { clues: ['NEWS', 'WALL', 'SAND'], answer: 'PAPER' },
      { clues: ['DOUGH', 'PEA', 'WING'], answer: 'NUT' },
      { clues: ['BACK', 'ON', 'CENTER'], answer: 'STAGE' },
    ],
  },
  '2026-07-27': {
    triplets: [
      { clues: ['BULL', 'HOT', 'WATCH'], answer: 'DOG' },
      { clues: ['PEN', 'JACK', 'POCKET'], answer: 'KNIFE' },
      { clues: ['END', 'BOARD', 'VIDEO'], answer: 'GAME' },
    ],
  },
  '2026-07-28': {
    triplets: [
      { clues: ['LAP', 'DESK', 'ROOF'], answer: 'TOP' },
      { clues: ['FOOT', 'FINGER', 'BLUE'], answer: 'PRINT' },
      { clues: ['TURN', 'TIME', 'WATER'], answer: 'TABLE' },
    ],
  },
  '2026-07-29': {
    triplets: [
      { clues: ['SEA', 'RIVER', 'DEATH'], answer: 'BED' },
      { clues: ['CAR', 'WHIRL', 'CESS'], answer: 'POOL' },
      { clues: ['EYE', 'CANKER', 'BED'], answer: 'SORE' },
    ],
  },
  '2026-07-30': {
    triplets: [
      { clues: ['POST', 'MILK', 'SNOW'], answer: 'MAN' },
      { clues: ['SIDE', 'BOARD', 'CAT'], answer: 'WALK' },
      { clues: ['MAIN', 'WONDER', 'FARM'], answer: 'LAND' },
    ],
  },
  '2026-07-31': {
    triplets: [
      { clues: ['RED', 'WHITE', 'PIPING'], answer: 'HOT' },
      { clues: ['TOP', 'HARD', 'COWBOY'], answer: 'HAT' },
      { clues: ['LADY', 'BED', 'JITTER'], answer: 'BUG' },
    ],
  },
  '2026-08-01': {
    triplets: [
      { clues: ['SWEAT', 'SMARTY', 'SNOW'], answer: 'PANTS' },
      { clues: ['TABLE', 'TEA', 'DESSERT'], answer: 'SPOON' },
      { clues: ['POLE', 'TOM', 'HELL'], answer: 'CAT' },
    ],
  },
  '2026-08-02': {
    triplets: [
      { clues: ['OUT', 'IN', 'TRAP'], answer: 'DOOR' },
      { clues: ['THUNDER', 'SAND', 'RAIN'], answer: 'STORM' },
      { clues: ['SIX', 'ICE', 'JET'], answer: 'PACK' },
    ],
  },
  '2026-08-03': {
    triplets: [
      { clues: ['FIELD', 'CHURCH', 'HOUSE'], answer: 'MOUSE' },
      { clues: ['HOUR', 'EYE', 'SPY'], answer: 'GLASS' },
      { clues: ['DOG', 'GREEN', 'WARE'], answer: 'HOUSE' },
    ],
  },
  '2026-08-04': {
    triplets: [
      { clues: ['BED', 'SPREAD', 'CHEAT'], answer: 'SHEET' },
      { clues: ['DROP', 'WALK', 'SIT'], answer: 'IN' },
      { clues: ['SCAPE', 'BILLY', 'MOUNTAIN'], answer: 'GOAT' },
    ],
  },
  '2026-08-05': {
    triplets: [
      { clues: ['BEER', 'ROCK', 'ROSE'], answer: 'GARDEN' },
      { clues: ['KEY', 'EAR', 'ONION'], answer: 'RING' },
      { clues: ['WRIST', 'STOP', 'NIGHT'], answer: 'WATCH' },
    ],
  },
  '2026-08-06': {
    triplets: [
      { clues: ['FOLLOW', 'START', 'GROWN'], answer: 'UP' },
      { clues: ['SMART', 'CELL', 'HEAD'], answer: 'PHONE' },
      { clues: ['RUN', 'GET', 'STOW'], answer: 'AWAY' },
    ],
  },
  '2026-08-07': {
    triplets: [
      { clues: ['SWEAT', 'NIGHT', 'UNDER'], answer: 'SHIRT' },
      { clues: ['SAIL', 'TUG', 'SPEED'], answer: 'BOAT' },
      { clues: ['BASS', 'SNARE', 'STEEL'], answer: 'DRUM' },
    ],
  },
  '2026-08-08': {
    triplets: [
      { clues: ['NECK', 'STREAM', 'FLAT'], answer: 'LINE' },
      { clues: ['NIGHT', 'SCREECH', 'BARN'], answer: 'OWL' },
      { clues: ['LOVE', 'THEME', 'SWAN'], answer: 'SONG' },
    ],
  },
  '2026-08-09': {
    triplets: [
      { clues: ['HAND', 'CROSS', 'SLEEP'], answer: 'OVER' },
      { clues: ['FLY', 'STAIR', 'SPEED'], answer: 'WAY' },
      { clues: ['BOW', 'NECK', 'BLACK'], answer: 'TIE' },
    ],
  },
  '2026-08-10': {
    triplets: [
      { clues: ['BED', 'LIFE', 'OVER'], answer: 'TIME' },
      { clues: ['HIGH', 'WHEEL', 'ARM'], answer: 'CHAIR' },
      { clues: ['CHOP', 'LIP', 'DRUM'], answer: 'STICK' },
    ],
  },
  '2026-08-11': {
    triplets: [
      { clues: ['THROW', 'FEED', 'FLASH'], answer: 'BACK' },
      { clues: ['HOME', 'ART', 'TEAM'], answer: 'WORK' },
      { clues: ['SUN', 'TOUCH', 'MELT'], answer: 'DOWN' },
    ],
  },
  '2026-08-12': {
    triplets: [
      { clues: ['BLUE', 'COW', 'JINGLE'], answer: 'BELL' },
      { clues: ['BASE', 'SOFT', 'HAND'], answer: 'BALL' },
      { clues: ['KEY', 'CARD', 'DASH'], answer: 'BOARD' },
    ],
  },
  '2026-08-13': {
    triplets: [
      { clues: ['TRACK', 'WET', 'PANT'], answer: 'SUIT' },
      { clues: ['SUN', 'HEART', 'WIND'], answer: 'BURN' },
      { clues: ['TENNIS', 'FOOD', 'SUPREME'], answer: 'COURT' },
    ],
  },
  '2026-08-14': {
    triplets: [
      { clues: ['FIRST', 'WORLD', 'MIDDLE'], answer: 'CLASS' },
      { clues: ['DRUG', 'BOOK', 'SUPER'], answer: 'STORE' },
      { clues: ['BLOW', 'BONE', 'TUMBLE'], answer: 'DRY' },
    ],
  },
  '2026-08-15': {
    triplets: [
      { clues: ['KEY', 'FOOT', 'BANK'], answer: 'NOTE' },
      { clues: ['SAUCE', 'DUST', 'BED'], answer: 'PAN' },
      { clues: ['RAIN', 'SLOW', 'SQUARE'], answer: 'DANCE' },
    ],
  },
  '2026-08-16': {
    triplets: [
      { clues: ['GROUND', 'DANCE', 'SHOP'], answer: 'FLOOR' },
      { clues: ['CARRY', 'LOG', 'TURN'], answer: 'ON' },
      { clues: ['OFF', 'SEA', 'LAKE'], answer: 'SHORE' },
    ],
  },
  '2026-08-17': {
    triplets: [
      { clues: ['WATCH', 'CLOCK', 'BELL'], answer: 'TOWER' },
      { clues: ['CART', 'FLY', 'WATER'], answer: 'WHEEL' },
      { clues: ['SUN', 'FLAT', 'THATCH'], answer: 'ROOF' },
    ],
  },
  '2026-08-18': {
    triplets: [
      { clues: ['AIR', 'WORK', 'CRAWL'], answer: 'SPACE' },
      { clues: ['BABY', 'RAIN', 'BRIDAL'], answer: 'SHOWER' },
      { clues: ['STONE', 'ICE', 'BITTER'], answer: 'COLD' },
    ],
  },
  '2026-08-19': {
    triplets: [
      { clues: ['UP', 'MID', 'HOME'], answer: 'TOWN' },
      { clues: ['SEAT', 'CONVEYOR', 'BLACK'], answer: 'BELT' },
      { clues: ['CLOTHES', 'DARK', 'ROCKING'], answer: 'HORSE' },
    ],
  },
  '2026-08-20': {
    triplets: [
      { clues: ['RACE', 'SOUND', 'OFF'], answer: 'TRACK' },
      { clues: ['RED', 'FIRE', 'SLY'], answer: 'FOX' },
      { clues: ['GINGER', 'SHORT', 'FLAT'], answer: 'BREAD' },
    ],
  },
  '2026-08-21': {
    triplets: [
      { clues: ['MAN', 'HORSE', 'WILL'], answer: 'POWER' },
      { clues: ['BUMBLE', 'HONEY', 'SPELLING'], answer: 'BEE' },
      { clues: ['ALARM', 'GRANDFATHER', 'CUCKOO'], answer: 'CLOCK' },
    ],
  },
  '2026-08-22': {
    triplets: [
      { clues: ['HOME', 'LOVE', 'SEA'], answer: 'SICK' },
      { clues: ['HAND', 'GRAND', 'NEWS'], answer: 'STAND' },
      { clues: ['HAIR', 'FISH', 'INTER'], answer: 'NET' },
    ],
  },
  '2026-08-23': {
    triplets: [
      { clues: ['FIRE', 'SEA', 'STONE'], answer: 'WALL' },
      { clues: ['HOUSE', 'STRONG', 'FOOT'], answer: 'HOLD' },
      { clues: ['NIGHT', 'HUB', 'KNEE'], answer: 'CAP' },
    ],
  },
  '2026-08-24': {
    triplets: [
      { clues: ['HORSE', 'SNOW', 'GUM'], answer: 'SHOE' },
      { clues: ['RATTLE', 'SEA', 'GRASS'], answer: 'SNAKE' },
      { clues: ['WERE', 'LONE', 'GRAY'], answer: 'WOLF' },
    ],
  },
  '2026-08-25': {
    triplets: [
      { clues: ['GOLD', 'JELLY', 'CAT'], answer: 'FISH' },
      { clues: ['TIME', 'CHECK', 'SHOUT'], answer: 'OUT' },
      { clues: ['COURT', 'VINE', 'JUNK'], answer: 'YARD' },
    ],
  },
  '2026-08-26': {
    triplets: [
      { clues: ['GREEN', 'FRENCH', 'BULL'], answer: 'HORN' },
      { clues: ['BOXING', 'OVEN', 'HOCKEY'], answer: 'GLOVE' },
      { clues: ['HEDGE', 'WART', 'GROUND'], answer: 'HOG' },
    ],
  },
  '2026-08-27': {
    triplets: [
      { clues: ['PAN', 'CUP', 'FRUIT'], answer: 'CAKE' },
      { clues: ['HEAD', 'DOWN', 'UP'], answer: 'WIND' },
      { clues: ['KOALA', 'BLACK', 'BROWN'], answer: 'BEAR' },
    ],
  },
  '2026-08-28': {
    triplets: [
      { clues: ['DEAD', 'PAD', 'GRID'], answer: 'LOCK' },
      { clues: ['PACK', 'MUSK', 'LAB'], answer: 'RAT' },
      { clues: ['WATER', 'STORE', 'FORE'], answer: 'FRONT' },
    ],
  },
  '2026-08-29': {
    triplets: [
      { clues: ['NEWS', 'WALL', 'SAND'], answer: 'PAPER' },
      { clues: ['DOUGH', 'PEA', 'WING'], answer: 'NUT' },
      { clues: ['BACK', 'ON', 'CENTER'], answer: 'STAGE' },
    ],
  },
  '2026-08-30': {
    triplets: [
      { clues: ['HIGH', 'PRE', 'HOME'], answer: 'SCHOOL' },
      { clues: ['PEN', 'JACK', 'POCKET'], answer: 'KNIFE' },
      { clues: ['GUARD', 'CORN', 'MAD'], answer: 'DOG' },
    ],
  },
  '2026-08-31': {
    triplets: [
      { clues: ['TURN', 'TIME', 'WATER'], answer: 'TABLE' },
      { clues: ['LAP', 'DESK', 'ROOF'], answer: 'TOP' },
      { clues: ['FOOT', 'FINGER', 'BLUE'], answer: 'PRINT' },
    ],
  },
  '2026-09-01': {
    triplets: [
      { clues: ['FLOWER', 'WATER', 'DAY'], answer: 'BED' },
      { clues: ['CAR', 'WHIRL', 'CESS'], answer: 'POOL' },
      { clues: ['EYE', 'CANKER', 'BED'], answer: 'SORE' },
    ],
  },
  '2026-09-02': {
    triplets: [
      { clues: ['SIDE', 'BOARD', 'CAT'], answer: 'WALK' },
      { clues: ['POST', 'MILK', 'SNOW'], answer: 'MAN' },
      { clues: ['MAIN', 'WONDER', 'FARM'], answer: 'LAND' },
    ],
  },
  '2026-09-03': {
    triplets: [
      { clues: ['TOP', 'HARD', 'COWBOY'], answer: 'HAT' },
      { clues: ['RED', 'WHITE', 'PIPING'], answer: 'HOT' },
      { clues: ['LADY', 'BED', 'JITTER'], answer: 'BUG' },
    ],
  },
  '2026-09-04': {
    triplets: [
      { clues: ['BOB', 'WILD', 'COPY'], answer: 'CAT' },
      { clues: ['SWEAT', 'SMARTY', 'SNOW'], answer: 'PANTS' },
      { clues: ['TABLE', 'TEA', 'DESSERT'], answer: 'SPOON' },
    ],
  },
  '2026-09-05': {
    triplets: [
      { clues: ['THUNDER', 'SAND', 'RAIN'], answer: 'STORM' },
      { clues: ['SIX', 'ICE', 'JET'], answer: 'PACK' },
      { clues: ['BACK', 'NEXT', 'SLIDING'], answer: 'DOOR' },
    ],
  },
  '2026-09-06': {
    triplets: [
      { clues: ['FIELD', 'CHURCH', 'HOUSE'], answer: 'MOUSE' },
      { clues: ['TREE', 'PENT', 'COURT'], answer: 'HOUSE' },
      { clues: ['HOUR', 'EYE', 'SPY'], answer: 'GLASS' },
    ],
  },
  '2026-09-07': {
    triplets: [
      { clues: ['BED', 'SPREAD', 'CHEAT'], answer: 'SHEET' },
      { clues: ['BUILT', 'CHECK', 'PLUG'], answer: 'IN' },
      { clues: ['SCAPE', 'BILLY', 'MOUNTAIN'], answer: 'GOAT' },
    ],
  },
  '2026-09-08': {
    triplets: [
      { clues: ['BEER', 'ROCK', 'ROSE'], answer: 'GARDEN' },
      { clues: ['WRIST', 'STOP', 'NIGHT'], answer: 'WATCH' },
      { clues: ['WEDDING', 'BOXING', 'NOSE'], answer: 'RING' },
    ],
  },
  '2026-09-09': {
    triplets: [
      { clues: ['WIND', 'CLOSE', 'WARM'], answer: 'UP' },
      { clues: ['TELE', 'MEGA', 'MICRO'], answer: 'PHONE' },
      { clues: ['WOLF', 'DOG', 'TIN'], answer: 'WHISTLE' },
    ],
  },
  '2026-09-10': {
    triplets: [
      { clues: ['SAIL', 'TUG', 'SPEED'], answer: 'BOAT' },
      { clues: ['T', 'DRESS', 'POLO'], answer: 'SHIRT' },
      { clues: ['EAR', 'KETTLE', 'OIL'], answer: 'DRUM' },
    ],
  },
  '2026-09-11': {
    triplets: [
      { clues: ['BASE', 'DEAD', 'HAIR'], answer: 'LINE' },
      { clues: ['NIGHT', 'SCREECH', 'BARN'], answer: 'OWL' },
      { clues: ['LOVE', 'THEME', 'SWAN'], answer: 'SONG' },
    ],
  },
  '2026-09-12': {
    triplets: [
      { clues: ['HIGH', 'DRIVE', 'RUN'], answer: 'WAY' },
      { clues: ['BOW', 'NECK', 'BLACK'], answer: 'TIE' },
      { clues: ['JACK', 'SNOW', 'RE'], answer: 'BOOT' },
    ],
  },
  '2026-09-13': {
    triplets: [
      { clues: ['BED', 'LIFE', 'OVER'], answer: 'TIME' },
      { clues: ['CHOP', 'LIP', 'DRUM'], answer: 'STICK' },
      { clues: ['FOOT', 'ARMS', 'RAT'], answer: 'RACE' },
    ],
  },
  '2026-09-14': {
    triplets: [
      { clues: ['MOCKING', 'LOVE', 'HUMMING'], answer: 'BIRD' },
      { clues: ['WOOD', 'PAPER', 'GUESS'], answer: 'WORK' },
      { clues: ['SLOW', 'LOCK', 'SHUT'], answer: 'DOWN' },
    ],
  },
  '2026-09-15': {
    triplets: [
      { clues: ['BLUE', 'COW', 'JINGLE'], answer: 'BELL' },
      { clues: ['SKATE', 'CLIP', 'SNOW'], answer: 'BOARD' },
      { clues: ['PIN', 'ODD', 'PAINT'], answer: 'BALL' },
    ],
  },
  '2026-09-16': {
    triplets: [
      { clues: ['SWIM', 'JUMP', 'LAW'], answer: 'SUIT' },
      { clues: ['SUN', 'HEART', 'WIND'], answer: 'BURN' },
      { clues: ['TENNIS', 'FOOD', 'SUPREME'], answer: 'COURT' },
    ],
  },
  '2026-09-17': {
    triplets: [
      { clues: ['FIRST', 'WORLD', 'MIDDLE'], answer: 'CLASS' },
      { clues: ['BLOW', 'BONE', 'TUMBLE'], answer: 'DRY' },
      { clues: ['DRUG', 'BOOK', 'SUPER'], answer: 'STORE' },
    ],
  },
  '2026-09-18': {
    triplets: [
      { clues: ['KEY', 'FOOT', 'BANK'], answer: 'NOTE' },
      { clues: ['SAUCE', 'DUST', 'BED'], answer: 'PAN' },
      { clues: ['TAP', 'BREAK', 'LAP'], answer: 'DANCE' },
    ],
  },
  '2026-09-19': {
    triplets: [
      { clues: ['GROUND', 'DANCE', 'SHOP'], answer: 'FLOOR' },
      { clues: ['CARRY', 'LOG', 'TURN'], answer: 'ON' },
      { clues: ['OFF', 'SEA', 'LAKE'], answer: 'SHORE' },
    ],
  },
  '2026-09-20': {
    triplets: [
      { clues: ['WATCH', 'CLOCK', 'BELL'], answer: 'TOWER' },
      { clues: ['CART', 'FLY', 'WATER'], answer: 'WHEEL' },
      { clues: ['SUN', 'FLAT', 'THATCH'], answer: 'ROOF' },
    ],
  },
  '2026-09-21': {
    triplets: [
      { clues: ['AIR', 'WORK', 'CRAWL'], answer: 'SPACE' },
      { clues: ['STONE', 'ICE', 'BITTER'], answer: 'COLD' },
      { clues: ['BABY', 'RAIN', 'BRIDAL'], answer: 'SHOWER' },
    ],
  },
  '2026-09-22': {
    triplets: [
      { clues: ['SEA', 'RACE', 'WORK'], answer: 'HORSE' },
      { clues: ['HAND', 'WORK', 'GUIDE'], answer: 'BOOK' },
      { clues: ['UP', 'MID', 'HOME'], answer: 'TOWN' },
    ],
  },
  '2026-09-23': {
    triplets: [
      { clues: ['RACE', 'SOUND', 'OFF'], answer: 'TRACK' },
      { clues: ['BALL', 'CAR', 'THEME'], answer: 'PARK' },
      { clues: ['RED', 'FIRE', 'SLY'], answer: 'FOX' },
    ],
  },
  '2026-09-24': {
    triplets: [
      { clues: ['MAN', 'HORSE', 'WILL'], answer: 'POWER' },
      { clues: ['BUMBLE', 'HONEY', 'SPELLING'], answer: 'BEE' },
      { clues: ['ALARM', 'GRANDFATHER', 'CUCKOO'], answer: 'CLOCK' },
    ],
  },
  '2026-09-25': {
    triplets: [
      { clues: ['HOME', 'LOVE', 'SEA'], answer: 'SICK' },
      { clues: ['HAIR', 'FISH', 'INTER'], answer: 'NET' },
      { clues: ['HAND', 'GRAND', 'NEWS'], answer: 'STAND' },
    ],
  },
  '2026-09-26': {
    triplets: [
      { clues: ['FIRE', 'SEA', 'STONE'], answer: 'WALL' },
      { clues: ['HOUSE', 'STRONG', 'FOOT'], answer: 'HOLD' },
      { clues: ['NIGHT', 'HUB', 'KNEE'], answer: 'CAP' },
    ],
  },
  '2026-09-27': {
    triplets: [
      { clues: ['HORSE', 'SNOW', 'GUM'], answer: 'SHOE' },
      { clues: ['RATTLE', 'SEA', 'GRASS'], answer: 'SNAKE' },
      { clues: ['WERE', 'LONE', 'GRAY'], answer: 'WOLF' },
    ],
  },
  '2026-09-28': {
    triplets: [
      { clues: ['PRINT', 'FALL', 'BURN'], answer: 'OUT' },
      { clues: ['LIFT', 'PLAY', 'SHOW'], answer: 'OFF' },
      { clues: ['GOLD', 'JELLY', 'CAT'], answer: 'FISH' },
    ],
  },
  '2026-09-29': {
    triplets: [
      { clues: ['FOG', 'SHOE', 'LONG'], answer: 'HORN' },
      { clues: ['BOXING', 'OVEN', 'HOCKEY'], answer: 'GLOVE' },
      { clues: ['HEDGE', 'WART', 'GROUND'], answer: 'HOG' },
    ],
  },
  '2026-09-30': {
    triplets: [
      { clues: ['PAN', 'CUP', 'FRUIT'], answer: 'CAKE' },
      { clues: ['WHIRL', 'CROSS', 'TAIL'], answer: 'WIND' },
      { clues: ['TEDDY', 'POLAR', 'GRIZZLY'], answer: 'BEAR' },
    ],
  },
  '2026-10-01': {
    triplets: [
      { clues: ['DEAD', 'PAD', 'GRID'], answer: 'LOCK' },
      { clues: ['PACK', 'MUSK', 'LAB'], answer: 'RAT' },
      { clues: ['WATER', 'STORE', 'FORE'], answer: 'FRONT' },
    ],
  },
  '2026-10-02': {
    triplets: [
      { clues: ['NEWS', 'WALL', 'SAND'], answer: 'PAPER' },
      { clues: ['DOUGH', 'PEA', 'WING'], answer: 'NUT' },
      { clues: ['BACK', 'ON', 'CENTER'], answer: 'STAGE' },
    ],
  },
  '2026-10-03': {
    triplets: [
      { clues: ['END', 'BOARD', 'VIDEO'], answer: 'GAME' },
      { clues: ['SHEEP', 'LAP', 'UNDER'], answer: 'DOG' },
      { clues: ['PEN', 'JACK', 'POCKET'], answer: 'KNIFE' },
    ],
  },
  '2026-10-04': {
    triplets: [
      { clues: ['LAP', 'DESK', 'ROOF'], answer: 'TOP' },
      { clues: ['TURN', 'TIME', 'WATER'], answer: 'TABLE' },
      { clues: ['FOOT', 'FINGER', 'BLUE'], answer: 'PRINT' },
    ],
  },
  '2026-10-05': {
    triplets: [
      { clues: ['SEA', 'RIVER', 'DEATH'], answer: 'BED' },
      { clues: ['CAR', 'WHIRL', 'CESS'], answer: 'POOL' },
      { clues: ['EYE', 'CANKER', 'BED'], answer: 'SORE' },
    ],
  },
  '2026-10-06': {
    triplets: [
      { clues: ['SIDE', 'BOARD', 'CAT'], answer: 'WALK' },
      { clues: ['POST', 'MILK', 'SNOW'], answer: 'MAN' },
      { clues: ['MAIN', 'WONDER', 'FARM'], answer: 'LAND' },
    ],
  },
  '2026-10-07': {
    triplets: [
      { clues: ['TOP', 'HARD', 'COWBOY'], answer: 'HAT' },
      { clues: ['RED', 'WHITE', 'PIPING'], answer: 'HOT' },
      { clues: ['LADY', 'BED', 'JITTER'], answer: 'BUG' },
    ],
  },
  '2026-10-08': {
    triplets: [
      { clues: ['SWEAT', 'SMARTY', 'SNOW'], answer: 'PANTS' },
      { clues: ['TABLE', 'TEA', 'DESSERT'], answer: 'SPOON' },
      { clues: ['POLE', 'TOM', 'HELL'], answer: 'CAT' },
    ],
  },
  '2026-10-09': {
    triplets: [
      { clues: ['THUNDER', 'SAND', 'RAIN'], answer: 'STORM' },
      { clues: ['OUT', 'IN', 'TRAP'], answer: 'DOOR' },
      { clues: ['SIX', 'ICE', 'JET'], answer: 'PACK' },
    ],
  },
  '2026-10-10': {
    triplets: [
      { clues: ['FIRE', 'LIGHT', 'HOT'], answer: 'HOUSE' },
      { clues: ['FIELD', 'CHURCH', 'HOUSE'], answer: 'MOUSE' },
      { clues: ['HOUR', 'EYE', 'SPY'], answer: 'GLASS' },
    ],
  },
  '2026-10-11': {
    triplets: [
      { clues: ['BED', 'SPREAD', 'CHEAT'], answer: 'SHEET' },
      { clues: ['DROP', 'WALK', 'SIT'], answer: 'IN' },
      { clues: ['SCAPE', 'BILLY', 'MOUNTAIN'], answer: 'GOAT' },
    ],
  },
  '2026-10-12': {
    triplets: [
      { clues: ['BEER', 'ROCK', 'ROSE'], answer: 'GARDEN' },
      { clues: ['WRIST', 'STOP', 'NIGHT'], answer: 'WATCH' },
      { clues: ['KEY', 'EAR', 'ONION'], answer: 'RING' },
    ],
  },
  '2026-10-13': {
    triplets: [
      { clues: ['MAKE', 'BACK', 'CHECK'], answer: 'UP' },
      { clues: ['SMART', 'CELL', 'HEAD'], answer: 'PHONE' },
      { clues: ['RUN', 'GET', 'STOW'], answer: 'AWAY' },
    ],
  },
  '2026-10-14': {
    triplets: [
      { clues: ['SWEAT', 'NIGHT', 'UNDER'], answer: 'SHIRT' },
      { clues: ['SAIL', 'TUG', 'SPEED'], answer: 'BOAT' },
      { clues: ['BASS', 'SNARE', 'STEEL'], answer: 'DRUM' },
    ],
  },
  '2026-10-15': {
    triplets: [
      { clues: ['NIGHT', 'SCREECH', 'BARN'], answer: 'OWL' },
      { clues: ['LOVE', 'THEME', 'SWAN'], answer: 'SONG' },
      { clues: ['PUNCH', 'BY', 'GUIDE'], answer: 'LINE' },
    ],
  },
  '2026-10-16': {
    triplets: [
      { clues: ['BOW', 'NECK', 'BLACK'], answer: 'TIE' },
      { clues: ['PUSH', 'LAY', 'ROLL'], answer: 'OVER' },
      { clues: ['JACK', 'SNOW', 'RE'], answer: 'BOOT' },
    ],
  },
  '2026-10-17': {
    triplets: [
      { clues: ['HIGH', 'WHEEL', 'ARM'], answer: 'CHAIR' },
      { clues: ['BED', 'LIFE', 'OVER'], answer: 'TIME' },
      { clues: ['CHOP', 'LIP', 'DRUM'], answer: 'STICK' },
    ],
  },
  '2026-10-18': {
    triplets: [
      { clues: ['SUN', 'TOUCH', 'MELT'], answer: 'DOWN' },
      { clues: ['HOME', 'ART', 'TEAM'], answer: 'WORK' },
      { clues: ['MOCKING', 'LOVE', 'HUMMING'], answer: 'BIRD' },
    ],
  },
  '2026-10-19': {
    triplets: [
      { clues: ['MEAT', 'SNOW', 'EYE'], answer: 'BALL' },
      { clues: ['BLUE', 'COW', 'JINGLE'], answer: 'BELL' },
      { clues: ['SCORE', 'SPRING', 'SEA'], answer: 'BOARD' },
    ],
  },
  '2026-10-20': {
    triplets: [
      { clues: ['TRACK', 'WET', 'PANT'], answer: 'SUIT' },
      { clues: ['SUN', 'HEART', 'WIND'], answer: 'BURN' },
      { clues: ['SECURITY', 'WET', 'ELECTRIC'], answer: 'BLANKET' },
    ],
  },
  '2026-10-21': {
    triplets: [
      { clues: ['FIRST', 'WORLD', 'MIDDLE'], answer: 'CLASS' },
      { clues: ['BLOW', 'BONE', 'TUMBLE'], answer: 'DRY' },
      { clues: ['DRUG', 'BOOK', 'SUPER'], answer: 'STORE' },
    ],
  },
  '2026-10-22': {
    triplets: [
      { clues: ['KEY', 'FOOT', 'BANK'], answer: 'NOTE' },
      { clues: ['SAUCE', 'DUST', 'BED'], answer: 'PAN' },
      { clues: ['RAIN', 'SLOW', 'SQUARE'], answer: 'DANCE' },
    ],
  },
  '2026-10-23': {
    triplets: [
      { clues: ['GROUND', 'DANCE', 'SHOP'], answer: 'FLOOR' },
      { clues: ['CARRY', 'LOG', 'TURN'], answer: 'ON' },
      { clues: ['OFF', 'SEA', 'LAKE'], answer: 'SHORE' },
    ],
  },
  '2026-10-24': {
    triplets: [
      { clues: ['WATCH', 'CLOCK', 'BELL'], answer: 'TOWER' },
      { clues: ['CART', 'FLY', 'WATER'], answer: 'WHEEL' },
      { clues: ['SUN', 'FLAT', 'THATCH'], answer: 'ROOF' },
    ],
  },
  '2026-10-25': {
    triplets: [
      { clues: ['AIR', 'WORK', 'CRAWL'], answer: 'SPACE' },
      { clues: ['STONE', 'ICE', 'BITTER'], answer: 'COLD' },
      { clues: ['BABY', 'RAIN', 'BRIDAL'], answer: 'SHOWER' },
    ],
  },
  '2026-10-26': {
    triplets: [
      { clues: ['YEAR', 'CHECK', 'SCRAP'], answer: 'BOOK' },
      { clues: ['UP', 'MID', 'HOME'], answer: 'TOWN' },
      { clues: ['SEAT', 'CONVEYOR', 'BLACK'], answer: 'BELT' },
    ],
  },
  '2026-10-27': {
    triplets: [
      { clues: ['RACE', 'SOUND', 'OFF'], answer: 'TRACK' },
      { clues: ['GINGER', 'SHORT', 'FLAT'], answer: 'BREAD' },
      { clues: ['RED', 'FIRE', 'SLY'], answer: 'FOX' },
    ],
  },
  '2026-10-28': {
    triplets: [
      { clues: ['MAN', 'HORSE', 'WILL'], answer: 'POWER' },
      { clues: ['BUMBLE', 'HONEY', 'SPELLING'], answer: 'BEE' },
      { clues: ['ALARM', 'GRANDFATHER', 'CUCKOO'], answer: 'CLOCK' },
    ],
  },
  '2026-10-29': {
    triplets: [
      { clues: ['HOME', 'LOVE', 'SEA'], answer: 'SICK' },
      { clues: ['HAND', 'GRAND', 'NEWS'], answer: 'STAND' },
      { clues: ['HAIR', 'FISH', 'INTER'], answer: 'NET' },
    ],
  },
  '2026-10-30': {
    triplets: [
      { clues: ['FIRE', 'SEA', 'STONE'], answer: 'WALL' },
      { clues: ['HOUSE', 'STRONG', 'FOOT'], answer: 'HOLD' },
      { clues: ['NIGHT', 'HUB', 'KNEE'], answer: 'CAP' },
    ],
  },
  '2026-10-31': {
    triplets: [
      { clues: ['HORSE', 'SNOW', 'GUM'], answer: 'SHOE' },
      { clues: ['WERE', 'LONE', 'GRAY'], answer: 'WOLF' },
      { clues: ['RATTLE', 'SEA', 'GRASS'], answer: 'SNAKE' },
    ],
  },
  '2026-11-01': {
    triplets: [
      { clues: ['WORK', 'LAY', 'BLACK'], answer: 'OUT' },
      { clues: ['GOLD', 'JELLY', 'CAT'], answer: 'FISH' },
      { clues: ['COURT', 'VINE', 'JUNK'], answer: 'YARD' },
    ],
  },
  '2026-11-02': {
    triplets: [
      { clues: ['GREEN', 'FRENCH', 'BULL'], answer: 'HORN' },
      { clues: ['BOXING', 'OVEN', 'HOCKEY'], answer: 'GLOVE' },
      { clues: ['HEDGE', 'WART', 'GROUND'], answer: 'HOG' },
    ],
  },
  '2026-11-03': {
    triplets: [
      { clues: ['HEAD', 'DOWN', 'UP'], answer: 'WIND' },
      { clues: ['PAN', 'CUP', 'FRUIT'], answer: 'CAKE' },
      { clues: ['KOALA', 'BLACK', 'BROWN'], answer: 'BEAR' },
    ],
  },
  '2026-11-04': {
    triplets: [
      { clues: ['DEAD', 'PAD', 'GRID'], answer: 'LOCK' },
      { clues: ['PACK', 'MUSK', 'LAB'], answer: 'RAT' },
      { clues: ['WATER', 'STORE', 'FORE'], answer: 'FRONT' },
    ],
  },
  '2026-11-05': {
    triplets: [
      { clues: ['NEWS', 'WALL', 'SAND'], answer: 'PAPER' },
      { clues: ['DOUGH', 'PEA', 'WING'], answer: 'NUT' },
      { clues: ['BACK', 'ON', 'CENTER'], answer: 'STAGE' },
    ],
  },
  '2026-11-06': {
    triplets: [
      { clues: ['BULL', 'HOT', 'WATCH'], answer: 'DOG' },
      { clues: ['PEN', 'JACK', 'POCKET'], answer: 'KNIFE' },
      { clues: ['HIGH', 'PRE', 'HOME'], answer: 'SCHOOL' },
    ],
  },
  '2026-11-07': {
    triplets: [
      { clues: ['LAP', 'DESK', 'ROOF'], answer: 'TOP' },
      { clues: ['FOOT', 'FINGER', 'BLUE'], answer: 'PRINT' },
      { clues: ['TURN', 'TIME', 'WATER'], answer: 'TABLE' },
    ],
  },
  '2026-11-08': {
    triplets: [
      { clues: ['FLOWER', 'WATER', 'DAY'], answer: 'BED' },
      { clues: ['CAR', 'WHIRL', 'CESS'], answer: 'POOL' },
      { clues: ['EYE', 'CANKER', 'BED'], answer: 'SORE' },
    ],
  },
  '2026-11-09': {
    triplets: [
      { clues: ['SIDE', 'BOARD', 'CAT'], answer: 'WALK' },
      { clues: ['POST', 'MILK', 'SNOW'], answer: 'MAN' },
      { clues: ['MAIN', 'WONDER', 'FARM'], answer: 'LAND' },
    ],
  },
  '2026-11-10': {
    triplets: [
      { clues: ['RED', 'WHITE', 'PIPING'], answer: 'HOT' },
      { clues: ['TOP', 'HARD', 'COWBOY'], answer: 'HAT' },
      { clues: ['LADY', 'BED', 'JITTER'], answer: 'BUG' },
    ],
  },
  '2026-11-11': {
    triplets: [
      { clues: ['SWEAT', 'SMARTY', 'SNOW'], answer: 'PANTS' },
      { clues: ['BOB', 'WILD', 'COPY'], answer: 'CAT' },
      { clues: ['TABLE', 'TEA', 'DESSERT'], answer: 'SPOON' },
    ],
  },
  '2026-11-12': {
    triplets: [
      { clues: ['THUNDER', 'SAND', 'RAIN'], answer: 'STORM' },
      { clues: ['SIX', 'ICE', 'JET'], answer: 'PACK' },
      { clues: ['BACK', 'NEXT', 'SLIDING'], answer: 'DOOR' },
    ],
  },
  '2026-11-13': {
    triplets: [
      { clues: ['FIELD', 'CHURCH', 'HOUSE'], answer: 'MOUSE' },
      { clues: ['HOUR', 'EYE', 'SPY'], answer: 'GLASS' },
      { clues: ['DOG', 'GREEN', 'WARE'], answer: 'HOUSE' },
    ],
  },
  '2026-11-14': {
    triplets: [
      { clues: ['BUILT', 'CHECK', 'PLUG'], answer: 'IN' },
      { clues: ['BED', 'SPREAD', 'CHEAT'], answer: 'SHEET' },
      { clues: ['SCAPE', 'BILLY', 'MOUNTAIN'], answer: 'GOAT' },
    ],
  },
  '2026-11-15': {
    triplets: [
      { clues: ['BEER', 'ROCK', 'ROSE'], answer: 'GARDEN' },
      { clues: ['WRIST', 'STOP', 'NIGHT'], answer: 'WATCH' },
      { clues: ['WEDDING', 'BOXING', 'NOSE'], answer: 'RING' },
    ],
  },
  '2026-11-16': {
    triplets: [
      { clues: ['FOLLOW', 'START', 'GROWN'], answer: 'UP' },
      { clues: ['TELE', 'MEGA', 'MICRO'], answer: 'PHONE' },
      { clues: ['WOLF', 'DOG', 'TIN'], answer: 'WHISTLE' },
    ],
  },
  '2026-11-17': {
    triplets: [
      { clues: ['SAIL', 'TUG', 'SPEED'], answer: 'BOAT' },
      { clues: ['T', 'DRESS', 'POLO'], answer: 'SHIRT' },
      { clues: ['EAR', 'KETTLE', 'OIL'], answer: 'DRUM' },
    ],
  },
  '2026-11-18': {
    triplets: [
      { clues: ['AIR', 'OUT', 'HEAD'], answer: 'LINE' },
      { clues: ['LOVE', 'THEME', 'SWAN'], answer: 'SONG' },
      { clues: ['NIGHT', 'SCREECH', 'BARN'], answer: 'OWL' },
    ],
  },
  '2026-11-19': {
    triplets: [
      { clues: ['HAND', 'CROSS', 'SLEEP'], answer: 'OVER' },
      { clues: ['BOW', 'NECK', 'BLACK'], answer: 'TIE' },
      { clues: ['JACK', 'SNOW', 'RE'], answer: 'BOOT' },
    ],
  },
  '2026-11-20': {
    triplets: [
      { clues: ['BED', 'LIFE', 'OVER'], answer: 'TIME' },
      { clues: ['CHOP', 'LIP', 'DRUM'], answer: 'STICK' },
      { clues: ['FOOT', 'ARMS', 'RAT'], answer: 'RACE' },
    ],
  },
  '2026-11-21': {
    triplets: [
      { clues: ['THROW', 'FEED', 'FLASH'], answer: 'BACK' },
      { clues: ['MOCKING', 'LOVE', 'HUMMING'], answer: 'BIRD' },
      { clues: ['WOOD', 'PAPER', 'GUESS'], answer: 'WORK' },
    ],
  },
  '2026-11-22': {
    triplets: [
      { clues: ['BLUE', 'COW', 'JINGLE'], answer: 'BELL' },
      { clues: ['FIRE', 'SCREW', 'CURVE'], answer: 'BALL' },
      { clues: ['KEY', 'CARD', 'DASH'], answer: 'BOARD' },
    ],
  },
  '2026-11-23': {
    triplets: [
      { clues: ['SWIM', 'JUMP', 'LAW'], answer: 'SUIT' },
      { clues: ['SUN', 'HEART', 'WIND'], answer: 'BURN' },
      { clues: ['SECURITY', 'WET', 'ELECTRIC'], answer: 'BLANKET' },
    ],
  },
  '2026-11-24': {
    triplets: [
      { clues: ['FIRST', 'WORLD', 'MIDDLE'], answer: 'CLASS' },
      { clues: ['BLOW', 'BONE', 'TUMBLE'], answer: 'DRY' },
      { clues: ['DRUG', 'BOOK', 'SUPER'], answer: 'STORE' },
    ],
  },
  '2026-11-25': {
    triplets: [
      { clues: ['KEY', 'FOOT', 'BANK'], answer: 'NOTE' },
      { clues: ['TAP', 'BREAK', 'LAP'], answer: 'DANCE' },
      { clues: ['SAUCE', 'DUST', 'BED'], answer: 'PAN' },
    ],
  },
  '2026-11-26': {
    triplets: [
      { clues: ['GROUND', 'DANCE', 'SHOP'], answer: 'FLOOR' },
      { clues: ['CARRY', 'LOG', 'TURN'], answer: 'ON' },
      { clues: ['OFF', 'SEA', 'LAKE'], answer: 'SHORE' },
    ],
  },
  '2026-11-27': {
    triplets: [
      { clues: ['WATCH', 'CLOCK', 'BELL'], answer: 'TOWER' },
      { clues: ['CART', 'FLY', 'WATER'], answer: 'WHEEL' },
      { clues: ['SUN', 'FLAT', 'THATCH'], answer: 'ROOF' },
    ],
  },
  '2026-11-28': {
    triplets: [
      { clues: ['AIR', 'WORK', 'CRAWL'], answer: 'SPACE' },
      { clues: ['STONE', 'ICE', 'BITTER'], answer: 'COLD' },
      { clues: ['BABY', 'RAIN', 'BRIDAL'], answer: 'SHOWER' },
    ],
  },
  '2026-11-29': {
    triplets: [
      { clues: ['SEA', 'RACE', 'WORK'], answer: 'HORSE' },
      { clues: ['UP', 'MID', 'HOME'], answer: 'TOWN' },
      { clues: ['SEAT', 'CONVEYOR', 'BLACK'], answer: 'BELT' },
    ],
  },
  '2026-11-30': {
    triplets: [
      { clues: ['RACE', 'SOUND', 'OFF'], answer: 'TRACK' },
      { clues: ['GINGER', 'SHORT', 'FLAT'], answer: 'BREAD' },
      { clues: ['RED', 'FIRE', 'SLY'], answer: 'FOX' },
    ],
  },
  '2026-12-01': {
    triplets: [
      { clues: ['MAN', 'HORSE', 'WILL'], answer: 'POWER' },
      { clues: ['BUMBLE', 'HONEY', 'SPELLING'], answer: 'BEE' },
      { clues: ['ALARM', 'GRANDFATHER', 'CUCKOO'], answer: 'CLOCK' },
    ],
  },
  '2026-12-02': {
    triplets: [
      { clues: ['HOME', 'LOVE', 'SEA'], answer: 'SICK' },
      { clues: ['HAIR', 'FISH', 'INTER'], answer: 'NET' },
      { clues: ['HAND', 'GRAND', 'NEWS'], answer: 'STAND' },
    ],
  },
  '2026-12-03': {
    triplets: [
      { clues: ['FIRE', 'SEA', 'STONE'], answer: 'WALL' },
      { clues: ['HOUSE', 'STRONG', 'FOOT'], answer: 'HOLD' },
      { clues: ['NIGHT', 'HUB', 'KNEE'], answer: 'CAP' },
    ],
  },
  '2026-12-04': {
    triplets: [
      { clues: ['HORSE', 'SNOW', 'GUM'], answer: 'SHOE' },
      { clues: ['WERE', 'LONE', 'GRAY'], answer: 'WOLF' },
      { clues: ['RATTLE', 'SEA', 'GRASS'], answer: 'SNAKE' },
    ],
  },
  '2026-12-05': {
    triplets: [
      { clues: ['LIFT', 'PLAY', 'SHOW'], answer: 'OFF' },
      { clues: ['TIME', 'CHECK', 'SHOUT'], answer: 'OUT' },
      { clues: ['GOLD', 'JELLY', 'CAT'], answer: 'FISH' },
    ],
  },
  '2026-12-06': {
    triplets: [
      { clues: ['FOG', 'SHOE', 'LONG'], answer: 'HORN' },
      { clues: ['BOXING', 'OVEN', 'HOCKEY'], answer: 'GLOVE' },
      { clues: ['HEDGE', 'WART', 'GROUND'], answer: 'HOG' },
    ],
  },
  '2026-12-07': {
    triplets: [
      { clues: ['PAN', 'CUP', 'FRUIT'], answer: 'CAKE' },
      { clues: ['WHIRL', 'CROSS', 'TAIL'], answer: 'WIND' },
      { clues: ['TEDDY', 'POLAR', 'GRIZZLY'], answer: 'BEAR' },
    ],
  },
  '2026-12-08': {
    triplets: [
      { clues: ['DEAD', 'PAD', 'GRID'], answer: 'LOCK' },
      { clues: ['PACK', 'MUSK', 'LAB'], answer: 'RAT' },
      { clues: ['WATER', 'STORE', 'FORE'], answer: 'FRONT' },
    ],
  },
  '2026-12-09': {
    triplets: [
      { clues: ['NEWS', 'WALL', 'SAND'], answer: 'PAPER' },
      { clues: ['DOUGH', 'PEA', 'WING'], answer: 'NUT' },
      { clues: ['BACK', 'ON', 'CENTER'], answer: 'STAGE' },
    ],
  },
  '2026-12-10': {
    triplets: [
      { clues: ['END', 'BOARD', 'VIDEO'], answer: 'GAME' },
      { clues: ['PEN', 'JACK', 'POCKET'], answer: 'KNIFE' },
      { clues: ['GRADE', 'AFTER', 'OLD'], answer: 'SCHOOL' },
    ],
  },
  '2026-12-11': {
    triplets: [
      { clues: ['TURN', 'TIME', 'WATER'], answer: 'TABLE' },
      { clues: ['LAP', 'DESK', 'ROOF'], answer: 'TOP' },
      { clues: ['FOOT', 'FINGER', 'BLUE'], answer: 'PRINT' },
    ],
  },
  '2026-12-12': {
    triplets: [
      { clues: ['SEA', 'RIVER', 'DEATH'], answer: 'BED' },
      { clues: ['CAR', 'WHIRL', 'CESS'], answer: 'POOL' },
      { clues: ['EYE', 'CANKER', 'BED'], answer: 'SORE' },
    ],
  },
  '2026-12-13': {
    triplets: [
      { clues: ['POST', 'MILK', 'SNOW'], answer: 'MAN' },
      { clues: ['SIDE', 'BOARD', 'CAT'], answer: 'WALK' },
      { clues: ['MAIN', 'WONDER', 'FARM'], answer: 'LAND' },
    ],
  },
  '2026-12-14': {
    triplets: [
      { clues: ['TOP', 'HARD', 'COWBOY'], answer: 'HAT' },
      { clues: ['RED', 'WHITE', 'PIPING'], answer: 'HOT' },
      { clues: ['LADY', 'BED', 'JITTER'], answer: 'BUG' },
    ],
  },
  '2026-12-15': {
    triplets: [
      { clues: ['SWEAT', 'SMARTY', 'SNOW'], answer: 'PANTS' },
      { clues: ['TABLE', 'TEA', 'DESSERT'], answer: 'SPOON' },
      { clues: ['POLE', 'TOM', 'HELL'], answer: 'CAT' },
    ],
  },
  '2026-12-16': {
    triplets: [
      { clues: ['OUT', 'IN', 'TRAP'], answer: 'DOOR' },
      { clues: ['THUNDER', 'SAND', 'RAIN'], answer: 'STORM' },
      { clues: ['SIX', 'ICE', 'JET'], answer: 'PACK' },
    ],
  },
  '2026-12-17': {
    triplets: [
      { clues: ['TREE', 'PENT', 'COURT'], answer: 'HOUSE' },
      { clues: ['FIELD', 'CHURCH', 'HOUSE'], answer: 'MOUSE' },
      { clues: ['HOUR', 'EYE', 'SPY'], answer: 'GLASS' },
    ],
  },
  '2026-12-18': {
    triplets: [
      { clues: ['BED', 'SPREAD', 'CHEAT'], answer: 'SHEET' },
      { clues: ['DROP', 'WALK', 'SIT'], answer: 'IN' },
      { clues: ['SCAPE', 'BILLY', 'MOUNTAIN'], answer: 'GOAT' },
    ],
  },
  '2026-12-19': {
    triplets: [
      { clues: ['BEER', 'ROCK', 'ROSE'], answer: 'GARDEN' },
      { clues: ['WRIST', 'STOP', 'NIGHT'], answer: 'WATCH' },
      { clues: ['KEY', 'EAR', 'ONION'], answer: 'RING' },
    ],
  },
  '2026-12-20': {
    triplets: [
      { clues: ['SMART', 'CELL', 'HEAD'], answer: 'PHONE' },
      { clues: ['WIND', 'CLOSE', 'WARM'], answer: 'UP' },
      { clues: ['RUN', 'GET', 'STOW'], answer: 'AWAY' },
    ],
  },
  '2026-12-21': {
    triplets: [
      { clues: ['SWEAT', 'NIGHT', 'UNDER'], answer: 'SHIRT' },
      { clues: ['SAIL', 'TUG', 'SPEED'], answer: 'BOAT' },
      { clues: ['BASS', 'SNARE', 'STEEL'], answer: 'DRUM' },
    ],
  },
  '2026-12-22': {
    triplets: [
      { clues: ['TIME', 'SHORE', 'COAST'], answer: 'LINE' },
      { clues: ['NIGHT', 'SCREECH', 'BARN'], answer: 'OWL' },
      { clues: ['LOVE', 'THEME', 'SWAN'], answer: 'SONG' },
    ],
  },
  '2026-12-23': {
    triplets: [
      { clues: ['BOW', 'NECK', 'BLACK'], answer: 'TIE' },
      { clues: ['JACK', 'SNOW', 'RE'], answer: 'BOOT' },
      { clues: ['FREE', 'FAIR', 'AIR'], answer: 'WAY' },
    ],
  },
  '2026-12-24': {
    triplets: [
      { clues: ['HIGH', 'WHEEL', 'ARM'], answer: 'CHAIR' },
      { clues: ['BED', 'LIFE', 'OVER'], answer: 'TIME' },
      { clues: ['CHOP', 'LIP', 'DRUM'], answer: 'STICK' },
    ],
  },
  '2026-12-25': {
    triplets: [
      { clues: ['SUN', 'TOUCH', 'MELT'], answer: 'DOWN' },
      { clues: ['HOME', 'ART', 'TEAM'], answer: 'WORK' },
      { clues: ['MOCKING', 'LOVE', 'HUMMING'], answer: 'BIRD' },
    ],
  },
  '2026-12-26': {
    triplets: [
      { clues: ['BLUE', 'COW', 'JINGLE'], answer: 'BELL' },
      { clues: ['BASE', 'SOFT', 'HAND'], answer: 'BALL' },
      { clues: ['SKATE', 'CLIP', 'SNOW'], answer: 'BOARD' },
    ],
  },
  '2026-12-27': {
    triplets: [
      { clues: ['TRACK', 'WET', 'PANT'], answer: 'SUIT' },
      { clues: ['SUN', 'HEART', 'WIND'], answer: 'BURN' },
      { clues: ['TENNIS', 'FOOD', 'SUPREME'], answer: 'COURT' },
    ],
  },
  '2026-12-28': {
    triplets: [
      { clues: ['FIRST', 'WORLD', 'MIDDLE'], answer: 'CLASS' },
      { clues: ['BLOW', 'BONE', 'TUMBLE'], answer: 'DRY' },
      { clues: ['DRUG', 'BOOK', 'SUPER'], answer: 'STORE' },
    ],
  },
  '2026-12-29': {
    triplets: [
      { clues: ['KEY', 'FOOT', 'BANK'], answer: 'NOTE' },
      { clues: ['SAUCE', 'DUST', 'BED'], answer: 'PAN' },
      { clues: ['RAIN', 'SLOW', 'SQUARE'], answer: 'DANCE' },
    ],
  },
  '2026-12-30': {
    triplets: [
      { clues: ['GROUND', 'DANCE', 'SHOP'], answer: 'FLOOR' },
      { clues: ['CARRY', 'LOG', 'TURN'], answer: 'ON' },
      { clues: ['OFF', 'SEA', 'LAKE'], answer: 'SHORE' },
    ],
  },
  '2026-12-31': {
    triplets: [
      { clues: ['WATCH', 'CLOCK', 'BELL'], answer: 'TOWER' },
      { clues: ['CART', 'FLY', 'WATER'], answer: 'WHEEL' },
      { clues: ['SUN', 'FLAT', 'THATCH'], answer: 'ROOF' },
    ],
  },
};

export default puzzles;
