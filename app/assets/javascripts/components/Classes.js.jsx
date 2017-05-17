var Classes = React.createClass({
    getInitialState: function() {
        return {
          classes: this.props.array !==undefined? this.props.array:[]
        };
    },
    componentWillMount:function () {
        var self = this;
        $.ajax({
            url: 'get_forms',
            type:'GET',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию succes
             self.setState({classes:data});
            }
        });
    },
    handlerDelete:function (data) {
        var self = this;
        $.ajax({
            url: 'destroy_forms',
            type:'DELETE',
            dataType : "json",                     // тип загружаемых данных
            data : data,
            success: function (data, textStatus) {
                var newState = self.state.classes;
                newState = newState.filter(function (el) {
                    return el.id !== data.id;
                })
                self.setState({classes:newState});
            }
        });
    },
    add:function () {
        var self = this;
        $.ajax({
            url: 'create_class',
            type:'GET',
            dataType : "json",
            data : {form:{ name: $('#className').val() }},
            success: function (data, textStatus) {
                var newState = self.state.classes;
                newState.push(data);
                self.setState({classes:newState});
            }
        });
    },
    isTeacher: function(){
        return this.props.is_teacher?
            <div>
                <input type="text" className="text-box" id="className" placeholder={I18n.t('ph.name')}/>
                <button className="button" onClick={this.add}>{I18n.t('buttons.add')}</button>
            </div>
            :null
    },
    render: function() {
        var self = this;
        return (
            <div className="classes">
                <h2 className="uk-text-primary uk-text-center">{I18n.t('title.classes')}</h2>
                <ul className="contacts-list">
                    {
                        this.state.classes.map(function(el) {
                            return <Class
                                item = {el}
                                delete = {self.handlerDelete}
                                is_teacher = {self.props.is_teacher}
                            />;
                        })
                    }
                </ul>
                {this.isTeacher()}
            </div>
        );
    }
});

Classes.propTypes ={
    array: React.PropTypes.array
}
