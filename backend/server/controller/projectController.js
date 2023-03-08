import { config } from "dotenv";
config({path: '.env'})

export const allRepos = async (req, res)=>{
    const username = process.env.GITHUB_USERNAME
    const token = process.env.GITHUB_TOKEN
    const resp = await fetch(`https://api.github.com/users/${username}/repos?type=all&sort=created`, {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    const repos = await resp.json();
    res.json(repos)
}

export const singleRepo = async (req, res)=>{
    const username = process.env.GITHUB_USERNAME
    const param = req.params.slug

    const resp = await fetch(`https://api.github.com/repos/${username}/${param}`);
    const repos = await resp.json();

    res.json(repos)
}