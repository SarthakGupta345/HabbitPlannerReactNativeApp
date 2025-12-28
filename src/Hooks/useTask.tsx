import { useQuery } from "@tanstack/react-query";
import { getPostsFromDB } from "../db/posts";

export const useOfflinePosts = () => {
  return useQuery({
    queryKey: ["posts", "offline"],
    queryFn: getPostsFromDB,
    staleTime: Infinity,   // SQLite is already persisted
  });
};
