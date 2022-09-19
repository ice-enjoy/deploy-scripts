import shell from "shelljs";

const IMAGE = ({ name, env }) =>
  `364355229590.dkr.ecr.us-east-1.amazonaws.com/enjoy/${name.toLowerCase()}:${env.toLowerCase()}`;

export default function ({ name, env, port }) {
  console.log(`\n----- Docker - Stop ${name} -----\n`);
  shell.exec(`docker stop ${name}`);
  shell.exec(`docker rm ${name}`);

  console.log(`\n----- Docker - Start ${name} -----\n`);
  shell.exec(`docker run --ulimit nofile=262144:262144 --pull always --name ${name} -d -p ${port}:80 \
        ${IMAGE({ name, env })} nginx -g 'daemon off;'`);

  console.log("Done!");
}
