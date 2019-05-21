export interface GitIssue {
  number: number;
  title: string;
  created_at: string;
  user: GitIssueUser;
}

interface GitIssueUser {
  login: string;
}
