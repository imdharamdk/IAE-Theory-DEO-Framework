export const mongoCollections = {
  researchNotes: {
    fields: ["userId", "topic", "mode", "prompt", "response", "tags", "createdAt"]
  },
  uploadedDocuments: {
    fields: ["userId", "filename", "embeddingIds", "summary", "createdAt"]
  },
  theoryDebates: {
    fields: ["userId", "topic", "positions", "transcript", "scorecard", "createdAt"]
  }
};
