<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.css">
    <style>body { padding-top: 40px; }</style>

</head>
<body>
    <div id="app" class="container">
        @include('projects.list')

        <form action="/projects" method="post" @submit.prevent="onSubmit">
            <div class="control">
                <label for="name" class="label">Project Name:</label>

                <input type="text" id="name" name="name" class="input" v-model="name">

                <span class="help is-danger"></span>
            </div>

            <div class="control">
                <label for="description" class="label">Project Description:</label>

                <input type="text" id="description" name="description" class="input" v-model="description">
            </div>

            <div class="control">
                <button class="button is-primary">Create</button>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>
    <script src="../app.js"></script>
</body>
</html>
