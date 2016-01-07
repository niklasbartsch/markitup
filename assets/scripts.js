//Start - temporary functions to prevent errors
	function btnImageCallbackInsert() {
		alert('Module-Input is misconfigured, please use the example!');
	}
	
	function btnLinkInternalCallbackInsert() {
		alert('Module-Input is misconfigured, please use the example');
	}
//End - temporary functions to prevent errors

//Start - functions for markdown
	function btnMarkdownImageCallback (h) {
		var markitupFieldID = h.textarea.id;
		newPoolWindow('index.php?page=mediapool/media&opener_input_field='+markitupFieldID);
	}
	
	function btnMarkdownImageCallbackInsert (id, url, linktext) {
		window.opener.$.markItUp({
			target:'#'+id,
			openWith:'['+linktext+']('+url+')'
		});
	}
	
	function btnMarkdownLinkExternalCallback (h) {
		var linktext = h.selection;
		if (linktext == '') {
			var linktext = prompt('Linktext?'); //todo
		}
		
		var linkurl = prompt('URL?'); //todo
		
		return '['+linktext+']('+linkurl+')';
	}
	
	function btnMarkdownLinkInternalCallback (h) {
		var markitupFieldID = h.textarea.id;
		openLinkMap(markitupFieldID);
	}
	
	function btnMarkdownLinkInternalCallbackInsert (id, url, linktext) {
		window.opener.$.markItUp({
			target:'#'+id,
			openWith: '[',
			closeWith: ']('+url+')'
		});
	}
	
	function btnMarkdownLinkMailtoCallback (h) {
		var linktext = h.selection;
		if (linktext == '') {
			var linktext = prompt('Linktext?'); //todo
		}
		var emailaddress = prompt('Emailadresse?'); //todo
		
		return '['+linktext+'](mailto:'+emailaddress+')';
	}
	
	function btnMarkdownTableCallback (h) {
		cols = prompt('Wie viele Spalten?'); //todo
		rows = prompt('Wie viele Zeilen?'); //todo
		html = '';
		
		for (r = 0; r < rows; r++) {
			for (c = 0; c < cols; c++) {
				html += '| ABC ';
			}
			html += '|\n';
		}
		
		return html;
	}
	
	function btnMarkdownOrderedlistCallback (h) {
		var selection = h.selection;
		
		var lines = selection.split(/\r?\n/);
		var r = "";
		for (var i=0; i < lines.length; i++) {
			line = lines[i];
			
			r = r + (i+1) + '. ' + line;
			
			if (i != lines.length - 1) {
				r += "\n";
			}
		}
		return r;
	}
	
	function btnMarkdownUnorderedlistCallback (h) {
		var selection = h.selection;
		
		var lines = selection.split(/\r?\n/);
		var r = "";
		for (var i=0; i < lines.length; i++) {
			line = lines[i];
			
			r = r + "- " + line;
			
			if (i != lines.length - 1) {
				r += "\n";
			}
		}
		return r;
	}
//End - functions for markdown


//Start - functions for textile
	function btnTextileImageCallback (h) {
		var markitupFieldID = h.textarea.id;
		newPoolWindow('index.php?page=mediapool/media&opener_input_field='+markitupFieldID);
	}
	
	function btnTextileImageCallbackInsert (id, url, linktext) {
		window.opener.$.markItUp({
			target:'#'+id,
			openWith:'!'+url+'('+linktext+')!'
		});
	}
	
	function btnTextileLinkExternalCallback (h) {
		var linktext = h.selection;
		if (linktext == '') {
			var linktext = prompt('Linktext?'); //todo
		}
		
		var linkurl = prompt('URL?'); //todo
		
		return '"'+linktext+'":'+linkurl;
	}
	
	function btnTextileLinkInternalCallback (h) {
		var markitupFieldID = h.textarea.id;
		openLinkMap(markitupFieldID);
	}
	
	function btnTextileLinkInternalCallbackInsert (id, url, linktext) {
		window.opener.$.markItUp({
			target:'#'+id,
			openWith: '"',
			closeWith: '('+linktext+')":'+url
		});
	}
	
	function btnTextileLinkMailtoCallback (h) {
		var linktext = h.selection;
		if (linktext == '') {
			var linktext = prompt('Linktext?'); //todo
		}
		var emailaddress = prompt('Emailadresse?'); //todo
		
		return '"'+linktext+'":mailto:'+emailaddress;
	}

	function btnTextileTableCallback (h) {
		cols = prompt('Wie viele Spalten?'); //todo
		rows = prompt('Wie viele Zeilen?'); //todo
		html = '';
		
		for (r = 0; r < rows; r++) {
			for (c = 0; c < cols; c++) {
				html += '|ABC';
			}
			html += '|\n';
		}
		
		return html;
	}
	
	function btnTextileOrderedlistCallback (h) {
		var selection = h.selection;
		
		var lines = selection.split(/\r?\n/);
		var r = "";
		for (var i=0; i < lines.length; i++) {
			line = lines[i];
			
			r = r + "# " + line;
			
			if (i != lines.length - 1) {
				r += "\n";
			}
		}
		return r;
	}
	
	function btnTextileUnorderedlistCallback (h) {
		var selection = h.selection;
		
		var lines = selection.split(/\r?\n/);
		var r = "";
		for (var i=0; i < lines.length; i++) {
			line = lines[i];
			
			r = r + "* " + line;
			
			if (i != lines.length - 1) {
				r += "\n";
			}
		}
		return r;
	}
//End - functions for textile