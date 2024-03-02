import React from "react";

type Game = {
  id: string;
  launchDate: string;
  title: string;
  summary: string;
  imageFilenameThumb: string;
  imageFilenameFull: string;
  learnMoreLink: string;
  purchaseLink: string;
  dom?: number;
  prevMonth?: boolean;
};

type DefaultDate = {
  days: number;
  firstDay: number;
  month: number;
  year: number;
};

type Images = string[];
type Calendar = Game[][];

type CalendarProps = {
  games: Game[];
  calendar: DefaultDate;
  setCalenda: Function;
};

type MonthProps = {
  games: Game[];
  calendar: DefaultDate;
};

type SelectedGameProps = {
  game: Game | null;
  images: Images;
  weekSelected: boolean;
};

type SelectorProps = {
  calendar: DefaultDate;
  prevMonth: () => void;
  nextMonth: () => void;
};

type WeekProps = {
  week: number;
  days: Game[];
  gameSelected: Game | null;
  setWeekSelected: (week: number | null) => void;
  setGameSelected: (game: Game | null) => void;
  images: Images;
};

type WeekDayProps = {
  game?: Game;
  week: number;
  gameSelected: Game | null;
  setWeekSelected: (week: number | null) => void;
  setGameSelected: (game: Game | null) => void;
  images: Images;
};

interface DetailsFullImagesProps {
  images: string[];
}

interface MonthLoadingEffectProps {
  children: React.ReactNode;
}

export type {
  Game,
  Calendar,
  Images,
  DefaultDate,
  CalendarProps,
  MonthProps,
  SelectedGameProps,
  SelectorProps,
  WeekProps,
  WeekDayProps,
  DetailsFullImagesProps,
  MonthLoadingEffectProps,
};
