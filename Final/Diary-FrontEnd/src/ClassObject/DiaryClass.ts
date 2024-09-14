export class GeneralDiary {
  id: string;
  timestamp: any;
  title: string;
  hashTag: string[];
  emoji: number;
  bookmark: boolean;
  share: boolean;
  whoShare: string[];

  constructor(
    id: string,
    timestamp: any,
    titleText: string,
    hashTag: string[],
    emoji: number,
    bookmark: boolean,
    share: boolean,
    whoShare: string[]
  ) {
    this.id = id;
    this.timestamp = timestamp;
    this.title = titleText;
    this.hashTag = hashTag;
    this.emoji = emoji;
    this.bookmark = bookmark;
    this.share = share;
    this.whoShare = whoShare;
  }
}

export class DetailDirary {
  id: string;
  timestamp: any;
  title: string;
  diary: string;
  hashTag: string[];
  urlImage: string[];
  emoji: number;
  recordings: string[];
  locations: {}[];
  bookmark: boolean;

  constructor(
    id: string,
    timestamp: any,
    titleText: string,
    diaryText: string,
    hashTag: string[],
    urlImage: string[],
    emoji: number,
    recordings: string[],
    locations: {}[],
    bookmark: boolean
  ) {
    this.id = id;
    this.timestamp = timestamp;
    this.title = titleText;
    this.diary = diaryText;
    this.hashTag = hashTag;
    this.urlImage = urlImage;
    this.emoji = emoji;
    this.recordings = recordings;
    this.locations = locations;
    this.bookmark = bookmark;
  }
}

export class SharedDiary {
  id: string;
  timestamp: any;
  title: string;
  diary: string;
  hashTag: string[];
  urlImage: string[];
  emoji: number;
  recordings: string[];
  locations: {}[];
  uid: string;
  from: string;

  constructor(
    id: string,
    timestamp: any,
    titleText: string,
    diaryText: string,
    hashTag: string[],
    urlImage: string[],
    emoji: number,
    recordings: string[],
    locations: {}[],
    uid: string,
    from: string
  ) {
    this.id = id;
    this.timestamp = timestamp;
    this.title = titleText;
    this.diary = diaryText;
    this.hashTag = hashTag;
    this.urlImage = urlImage;
    this.emoji = emoji;
    this.recordings = recordings;
    this.locations = locations;
    this.uid = uid;
    this.from = from;
  }
}
