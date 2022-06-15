import axios from 'axios';

export const getProjects = async () => {
  const response = await axios.get('http://localhost:4000/projects');
  return response.data.map((res) => ({
    id: res.id,
    writerName: res.owner_name,
    writerNum: res.owner_num,
    projectVersion: res.project_version,
    title: res.title,
    college: res.college,
    department: res.department,
    createdAt: res.createdate.split(' ')[0],
    like: res.like,
    view: res.view,
    teamProposal: res.team_proposal,
  }));
};

export const getTimeLineProjects = async () => {
  const response = await axios.get(`http://localhost:4000/projects/`);
  return response.data;
};

export const getProject = async (id) => {
  const response = await axios.get(`http://localhost:4000/projects/${id}`);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`http://localhost:4000/users`);
  return response.data;
};
