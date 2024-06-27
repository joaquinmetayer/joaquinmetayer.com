import simpleGit from "simple-git";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { gitMessage } = req.body;

    const git = simpleGit();

    try {
      try {
        await git.pull("origin", "main"); 
      } catch (pullError) {
        if (pullError.message.includes('CONFLICT')) {
          await git.stash();
          await git.pull("origin", "main");
          await git.stash(['pop']);
        } else {
          throw pullError;
        }
      }

      const addResult = await git.add("./*");
      const commitResult = await git.commit(gitMessage);
      const pushResult = await git.push("origin", "main");

      res.status(200).json({
        success: true,
        message: "Commit and push successful",
        addResult,
        commitResult,
        pushResult,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: error.message || error,
        error,
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
