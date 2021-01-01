node {
        stage('Environment') {
            sh 'git --version'
        }

        stage('Build docker image'){
            sh 'build -t cgungaloo:react_list .'
        }
}
