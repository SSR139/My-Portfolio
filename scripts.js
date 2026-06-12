const content = {

orbit: `
<h2>Orbit TechSol</h2>
<p><strong>Technical Support Engineer</strong></p>
<br>
<ul>
<li>Supported production cloud environments.</li>
<li>Monitored applications and system health.</li>
<li>Participated in incident response and RCA.</li>
<li>Troubleshot deployment and runtime issues.</li>
<li>Maintained SLA compliance.</li>
</ul>
`,

sbi: `
<h2>SBI Life Insurance</h2>
<p><strong>Senior Associate</strong></p>
<br>
<ul>
<li>Supported enterprise applications.</li>
<li>Handled incidents and service requests.</li>
<li>Worked with business and technical teams.</li>
<li>Ensured operational continuity.</li>
<li>Maintained SLA adherence.</li>
</ul>
`,

project1: `
<h2>CI/CD Pipeline with AWS DevOps Tools</h2>
<ul>
<li>AWS CodePipeline</li>
<li>CodeCommit</li>
<li>CodeBuild</li>
<li>CodeDeploy</li>
<li>Automated Build-Test-Deploy Workflow</li>
</ul>
`,

project2: `
<h2>Jenkins Docker AWS Pipeline</h2>
<ul>
<li>Jenkins Automation</li>
<li>GitHub Webhooks</li>
<li>Dockerized Node.js Application</li>
<li>Amazon EC2 Deployment</li>
<li>Continuous Deployment Workflow</li>
</ul>
`,

project3: `
<h2>ECS ECR Fargate Deployment</h2>
<ul>
<li>Amazon ECS</li>
<li>AWS Fargate</li>
<li>Amazon ECR</li>
<li>Docker Containers</li>
<li>CloudWatch Monitoring</li>
<li>IAM Security</li>
</ul>
`,

project4: `
<h2>Enterprise AWS Architecture</h2>
<ul>
<li>VPC with Public & Private Subnets</li>
<li>Elastic Load Balancer</li>
<li>Auto Scaling Groups</li>
<li>CloudWatch Monitoring</li>
<li>CloudTrail Logging</li>
<li>AWS Backup</li>
<li>Cost Optimization</li>
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