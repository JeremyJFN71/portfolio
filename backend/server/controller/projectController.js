import { config } from "dotenv";
import ogs from 'open-graph-scraper';
config({path: '.env'})

export const allRepos = async (req, res)=>{
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    let repos;

    await fetch(`https://api.github.com/users/${username}/repos?type=all&sort=created`, {
        headers: {
            authorization: `bearer ${token}`
        }
    }).then(resp=>resp.json())
    .then(async (data)=>{
        for (const [index, repo] of data.entries()){
            const options = { url: repo.html_url };
            await ogs(options)
            .then((data2) => {
                const { result } = data2;
                data[index]['image'] = result.ogImage.url;
                repos=data;
            })
        }
    })
    .catch(err=>res.status(500).json({message: err.message}));


    res.json(repos);
}

export const singleRepo = async (req, res)=>{
    const username = process.env.GITHUB_USERNAME;
    const param = req.params.slug;

    await fetch(`https://api.github.com/repos/${username}/${param}`)
        .then(resp=>resp.json())
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message: err.message}));
}