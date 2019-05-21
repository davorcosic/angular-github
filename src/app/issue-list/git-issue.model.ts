export interface GitIssue {
  id: number;
  title: string;
  created_at: string;
  user: GitIssueUser;
}

interface GitIssueUser {
  login: string;
}
