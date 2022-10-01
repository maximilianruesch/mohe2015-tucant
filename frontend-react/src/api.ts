// This file is automatically generated at startup. Do not modify.
export type SearchResult = {
  a: string;
  b: string;
  c: string;
  d: number;
};
export type Course = {
  tucan_id: string;
  tucan_last_checked: string;
  title: string;
  course_id: string;
  sws: number;
  content: string;
  done: boolean;
};
export type ModuleMenuPathPart = {
  parent: number[] | undefined;
  tucan_id: string;
  name: string;
  leaf: boolean;
};
export async function login(input: Login): Promise<LoginResult> {
  const response = await fetch("http://localhost:8080/login", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as LoginResult;
}
export type Login = {
  username: string;
  password: string;
};
export type RegistrationEnum =
  | { type: "Submenu"; Submenu: ModuleMenu[] }
  | { type: "Modules"; Modules: Module[] };

export type LoginResult = {
  success: boolean;
};
export async function logout(input: void): Promise<void> {
  const response = await fetch("http://localhost:8080/logout", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as void;
}
export type Module = {
  tucan_id: string;
  tucan_last_checked: string;
  title: string;
  module_id: string;
  credits: number | undefined;
  content: string;
  done: boolean;
};
export async function get_modules(input: string): Promise<ModuleMenuResponse> {
  const response = await fetch("http://localhost:8080/modules", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as ModuleMenuResponse;
}
export async function index(input: void): Promise<string> {
  const response = await fetch("http://localhost:8080/", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as string;
}
export async function course(input: string): Promise<Course> {
  const response = await fetch("http://localhost:8080/course", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as Course;
}
export type ModuleMenuResponse = {
  module_menu: ModuleMenu;
  entries: RegistrationEnum;
  path: ModuleMenuPathPart[][];
};
export async function search_module(input: string): Promise<SearchResult[]> {
  const response = await fetch("http://localhost:8080/search-module", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as SearchResult[];
}
export type ModuleResponse = {
  module: Module;
  path: ModuleMenuPathPart[][];
};
export async function search_course(input: string): Promise<SearchResult[]> {
  const response = await fetch("http://localhost:8080/search-course", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as SearchResult[];
}
export async function module(input: string): Promise<ModuleResponse> {
  const response = await fetch("http://localhost:8080/module", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-protection": "tucant",
    },
    body: JSON.stringify(input),
  });
  return (await response.json()) as ModuleResponse;
}
export type ModuleMenu = {
  tucan_id: string;
  tucan_last_checked: string;
  name: string;
  child_type: number;
  parent: string;
};
