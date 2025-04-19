export type Session = {
  user: {
    id: string;
    email: string;
  };
};

export type Profile = {
  Id: string;
  UserId: string;
  AvatarUrl: string;
  Name: string;
  StatusMessage: string;
};

export type RoomInfo = {
  Room: Room;
  Profile: Profile;
};

export type Room = {
  Id: string;
  NotReadedMessageCount: number;
};
