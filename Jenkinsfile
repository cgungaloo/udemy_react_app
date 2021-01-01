node {
        stage('Environment') {
            sh 'git --version'
            sh 'docker -v'
        }

        stage('Build docker image'){
            sh 'build -t cgungaloo:react_list .'
        }
}
