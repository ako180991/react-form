import React, { Component } from 'react';




class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',

        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {

        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)

        };

        e.preventDefault();

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                }
                else {
                    alert(`Film ajouté avec l'ID ${res}`)
                }
            }).catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout du film`);
            });

    }




    render() {
        return (
            <div className="FormMovie">
                <h1>My Favorite Movie</h1>

            <form onSubmit={this.submitForm}>
                <fieldset className="field">
                    <legend>My Favorite Movie</legend>
                    <div className="form-data" >
                        <label>Movie</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />

                    </div>
                    <div className="form-data">
                        <label>Poster</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                        />
                    </div>
                    <div className="area">
                        <label>Commentaires</label>
                        <textarea
                            type="text"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                        />
                    </div>
                    <div className="form-data">
                        <input type='submit' value='Envoyer'></input>
                    </div>
                </fieldset>
            </form>

            </div>
        );
    }

}

export default FormMovie;