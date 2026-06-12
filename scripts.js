const content = {

orbit: `
<h2>Orbit TechSol</h2>

<p><strong>Technical Support Engineer</strong></p>

<br>

<ul>
<li>Supported production cloud environments and monitored application health.</li>
<li>Worked with DevOps and Operations teams to maintain system availability.</li>
<li>Assisted in incident detection and resolution.</li>
<li>Troubleshot deployment and runtime issues.</li>
<li>Improved release processes and reduced operational issues.</li>
<li>Maintained SLA compliance and service reliability.</li>
</ul>
`,

sbi: `
<h2>SBI Life Insurance</h2>

<p><strong>Senior Associate</strong></p>

<br>

<ul>
<li>Supported enterprise applications and backend systems.</li>
<li>Handled ticketing, incident tracking and issue resolution.</li>
<li>Worked closely with business and technical teams.</li>
<li>Ensured application stability and operational continuity.</li>
<li>Maintained SLA adherence.</li>
</ul>
`,

project1: `
<h2>CI/CD Pipeline with AWS DevOps Tools</h2>

<ul>
<li>AWS CodePipeline</li>
<li>AWS CodeCommit</li>
<li>AWS CodeBuild</li>
<li>AWS CodeDeploy</li>
<li>Automated build, test and deployment workflows.</li>
</ul>
`,

project2: `
<h2>Jenkins + Docker + AWS Pipeline</h2>

<ul>
<li>Built automated CI/CD pipeline using Jenkins.</li>
<li>Configured GitHub webhooks.</li>
<li>Dockerized Node.js application.</li>
<li>Deployed application on Amazon EC2.</li>
<li>Improved deployment speed and consistency.</li>
</ul>
`,

project3: `
<h2>AWS ECS ECR Fargate Deployment</h2>

<ul>
<li>Containerized application using Docker.</li>
<li>Stored images in Amazon ECR.</li>
<li>Deployed containers using ECS Fargate.</li>
<li>Configured IAM roles and CloudWatch monitoring.</li>
<li>Improved scalability and reliability.</li>
</ul>
`,

project4: `
<h2>Enterprise AWS Architecture</h2>

<ul>
<li>Designed VPC with Public & Private Subnets.</li>
<li>Hosted applications on EC2 behind Load Balancer.</li>
<li>Configured Auto Scaling.</li>
<li>Implemented CloudWatch monitoring and alerts.</li>
<li>Enabled CloudTrail auditing and AWS Backup.</li>
<li>Performed cost optimization using AWS Cost Explorer.</li>
</ul>
`
};

function openModal(id){
    document.getElementById("modalBody").innerHTML = content[id];
    document.getElementById("modal").style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){

    const modal = document.getElementById("modal");

    if(event.target === modal){
        modal.style.display = "none";
    }
}